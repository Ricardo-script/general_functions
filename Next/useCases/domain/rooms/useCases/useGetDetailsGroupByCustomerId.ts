import { useCallback, useState } from 'react';
import { roomsApi } from '../roomsApi';
import { useFetchValidateToken } from '@/domain/auth/useCases/useFetchValidateToken';
import { EventItem } from '@/interfaces/DetailGroupInterface';

type UseGetDetailsGroupCustomerIdTypes = {
	loading: boolean | undefined;
	detailsGroupCustumerId: EventItem[];
	getDetailsGroupCustomerId: (customerId: string) => Promise<void>;
};

export function useGetDetailsGroupCustomerId(): UseGetDetailsGroupCustomerIdTypes {
	const [loading, setLoading] = useState<boolean>();
	const [detailsGroupCustumerId, setDetailsGroupCustumerId] = useState<EventItem[]>([]);
	const { fetchValidateToken } = useFetchValidateToken();

	const getDetailsGroupCustomerId = useCallback(async (customerId: string): Promise<void> => {
		try {
			setLoading(true);

			const { response } = await fetchValidateToken(async () => {
				return await roomsApi.getDetailsGroupByCustomerId(customerId);
			});
			setDetailsGroupCustumerId(response.items);
			console.log(response.items);
		} catch (error) {
			console.log('Error in get data from customer by token', error);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, getDetailsGroupCustomerId, detailsGroupCustumerId };
}
