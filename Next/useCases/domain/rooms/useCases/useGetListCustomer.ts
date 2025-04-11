import { useCallback, useState } from 'react';
import { roomsApi } from '../roomsApi';
import { CustomerItems } from '@/interfaces/ListCustomer';

type useGetListCustomer = {
	loading: boolean;
	getListCustomer: (customerId: string) => Promise<void>;
	listCustumer: CustomerItems[];
};

export function useGetListCustomer(): useGetListCustomer {
	const [loading, setLoading] = useState(false);
	const [listCustumer, setListCustumer] = useState<CustomerItems[]>([]);

	const getListCustomer = useCallback(async (customerId: string): Promise<void> => {
		try {
			setLoading(true);
			const { response } = await roomsApi.getListCustomer(customerId);

			setListCustumer(response.items);
		} catch (error) {
			console.log('Error in get list customer', error);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, getListCustomer, listCustumer };
}
