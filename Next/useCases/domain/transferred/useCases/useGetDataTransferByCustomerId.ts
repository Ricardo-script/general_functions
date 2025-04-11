import { useCallback, useState } from 'react';
import { transferredApi } from '../transferredApi';
import { ResponseApiTransferCustomerId } from '@/interfaces/TransferCustomerIdInterface';

type UseGetDataTransferByCustomerIdTypes = {
	loading: boolean | undefined;
	getDataTransferByCustomerId: (
		customerId: string,
	) => Promise<ResponseApiTransferCustomerId['response'] | undefined>;
	dataTransferByCustomerId?: ResponseApiTransferCustomerId['response'];
};

export function useGetDataTransferByCustomerId(): UseGetDataTransferByCustomerIdTypes {
	const [loading, setLoading] = useState<boolean>();
	const [dataTransferByCustomerId, setDataTransferByCustomerId] =
		useState<ResponseApiTransferCustomerId['response']>();

	const getDataTransferByCustomerId = useCallback(async (customerId: string) => {
		try {
			setLoading(true);

			const { response } = await transferredApi.getDataTransferByCustormerId(customerId);

			setDataTransferByCustomerId(response);

			return response;
		} catch (error) {
			console.log('Error get data transfer from customerid type out', error);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, getDataTransferByCustomerId, dataTransferByCustomerId };
}
