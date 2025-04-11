import { ResponseCustomerGetByEmail } from '@/interfaces/CustomerGetByEmail';
import { useCallback, useState } from 'react';
import { roomsApi } from '../roomsApi';

import useAuth from '@/hooks/useAuth';
import { UseCaseOptions } from '@/interfaces/UseCaseOptions';
import { useFetchValidateToken } from '@/domain/auth/useCases/useFetchValidateToken';

type useGetCustomerByEmailTypes = {
	loading: boolean | undefined;
	dataCustomer?: ResponseCustomerGetByEmail;
	getCustomByEmail: (email: string) => Promise<ResponseCustomerGetByEmail | undefined>;
};

export function useGetCustomerByEmail(options?: UseCaseOptions): useGetCustomerByEmailTypes {
	const [loading, setLoading] = useState<boolean>();
	const [dataCustomer, setDataCustomer] = useState<ResponseCustomerGetByEmail>();
	const { login } = useAuth({ redirectToHome: false });
	const { fetchValidateToken } = useFetchValidateToken();

	const getCustomByEmail = useCallback(
		async (email: string) => {
			try {
				setLoading(true);

				const { response } = await fetchValidateToken(async () => {
					return await roomsApi.getCustomerGetByEmail(email);
				});
				// const { response } = await roomsApi.getCustomerGetByEmail(email);

				setDataCustomer(response);
				options?.onSucess?.(response);
				return response;
			} catch (error) {
				options?.onError?.(error);
				// if (error instanceof FetchError) {
				// 	if (error.status === 401) {
				// 		await login({
				// 			email: String(process.env.NEXT_PUBLIC_EMAIL),
				// 			password: String(process.env.NEXT_PUBLIC_PASSWORD),
				// 		});

				// 		const { response } = await roomsApi.getCustomerGetByEmail(email);
				// 		options?.onSucess?.(response);
				// 		setDataCustomer(response);
				// 		return response;
				// 	}
				// }
				console.log('Error in get customer', error);
			} finally {
				setLoading(false);
			}
		},
		[login],
	);

	return { loading, dataCustomer, getCustomByEmail };
}
