'use client';

import { parseCookies } from 'nookies';

export async function fetchClient<T>(
	input: string | URL | Request,
	init?: RequestInit | undefined,
): Promise<T & Response> {
	const cookies = parseCookies();

	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, {
		...init,
		headers: {
			...init?.headers,
			...(cookies.token && {
				Authorization: cookies.tokenIntegrator,
				AuthorizationUser: cookies.token,
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


//------------------------------------------------------------------------------------------------

// uso:

/* 

'use client';

import { useCallback, useEffect, useState } from 'react';
import { fetchClient } from '@/lib/fetchClient';
import { ApiResponseTimeline, ResponseTimeLine } from '@/interfaces/TimelineInterface';

export default function Temp(): JSX.Element {
	const [timeline, setTimeline] = useState<ResponseTimeLine>();

	const getListtimeline = useCallback(async () => {
		try {
			const response = await fetchClient<ApiResponseTimeline>(
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

			setTimeline(response.response);
		} catch (error) {
			throw new Error('Error in get list timeline');
		}
	}, []);

	useEffect(() => {
		getListtimeline();
	}, [getListtimeline]);

	return (
		<section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
			{timeline?.data.items.map((item, index) => (
				<span key={index}>{item.interactionType.description}</span>
			))}
		</section>
	);
}


*/
