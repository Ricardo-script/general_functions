import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function fetchServer<T>(
	input: string | URL | Request,
	init?: RequestInit | undefined,
): Promise<T & Response> {
	const tokenIntegrator = cookies().get('tokenIntegrator')?.value || '';
	const token = cookies().get('token')?.value || '';

	const response = await fetch(input, {
		...init,
		headers: {
			...init?.headers,
			...(token && {
				Authorization: tokenIntegrator,
				AuthorizationUser: token,
			}), //{ Authorization: `Bearer ${cookies.token}` }
		},
	});

	if (response.status === 401) {
		return redirect('/');
	}

	const responseData = await response.json();

	return responseData;
}

//--------------------------------------------------------------------------------------------------

// uso:

/* 

    import { ApiResponseTimeline } from '@/interfaces/TimelineInterface';
import { fetchServer } from '@/lib/fetchServer';

export default async function ServerTemp(): Promise<JSX.Element> {
    
	async function fetchTimeline() {
		'use server';
		const response = await fetchServer<ApiResponseTimeline>(
			'https://hub.appdoaluno.com/api/student/timeline',
			{
				method: 'POST',
				body: JSON.stringify({
					studentId:
						'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.Lrn45H5i8vyhoYHhaBX2IU3tK7qa62Fr6Aqb38MTTFo',
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		return response.response;
	}

	const timeline = await fetchTimeline();

	return (
		<section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
			{timeline?.data.items.map((item, index) => (
				<span key={index}>{item.interactionType.description}</span>
			))}
		</section>
	);
}


*/
