import { cookies } from 'next/headers';

export async function fetchServer<T>(
	input: string | URL | Request,
	init?: RequestInit | undefined,
): Promise<T & Response> {
	const tokenIntegrator = (await cookies()).get('tokenIntegrator')?.value || '';
	const token = (await cookies()).get('token')?.value || '';

	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, {
		...init,
		headers: {
			...init?.headers,
			'Content-Type': 'application/json',
			...(token && {
				Authorization: tokenIntegrator,
				AuthorizationUser: token,
			}), //{ Authorization: `Bearer ${cookies.token}` }
		},
	});

	const responseData = await response.json();

	if (!response.ok) {
		const error = new Error(response.statusText || 'Request failed');
		error.cause = responseData;
		throw error.cause;
	}

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
