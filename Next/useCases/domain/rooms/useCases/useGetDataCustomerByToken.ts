import { useCallback, useState } from 'react';
import { roomsApi } from '../roomsApi';
import { ApiResponseCustomerByToken, UserDetails } from '@/interfaces/CustomerByToken';
import { useFetchValidateToken } from '@/domain/auth/useCases/useFetchValidateToken';
import { UseCaseOptions } from '@/interfaces/UseCaseOptions';

type UseGetDataCustomerByTokenTypes = {
	loading: boolean;
	getDataCustomerByToken: (token: string) => Promise<
		| {
				customer: UserDetails;
				owner: UserDetails;
		  }
		| undefined
	>;
	dataCustomer?: ApiResponseCustomerByToken['response'];
};

export function useGetDataCustomerByToken(
	options?: UseCaseOptions,
): UseGetDataCustomerByTokenTypes {
	const [loading, setLoading] = useState(false);

	const { fetchValidateToken } = useFetchValidateToken();
	const [dataCustomer, setDataCustomer] = useState<ApiResponseCustomerByToken['response']>();

	const getDataCustomerByToken = useCallback(async (token: string) => {
		try {
			setLoading(true);

			const { response } = await fetchValidateToken(async () => {
				return await roomsApi.getDataCustomerByToken(token);
			});

			options?.onSucess?.(response);
			setDataCustomer(response);

			return response;
		} catch (error) {
			options?.onError?.(error);
			console.log('Error in get data from customer by token', error);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, dataCustomer, getDataCustomerByToken };
}
