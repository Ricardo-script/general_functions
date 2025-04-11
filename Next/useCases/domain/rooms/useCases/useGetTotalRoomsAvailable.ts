import { useCallback, useState } from 'react';
import { roomsApi } from '../roomsApi';

type useGetTotalRoomsAvailabledTypes = {
	loading: boolean;
	getTotalRoomsAvailabled: (customerId: string) => Promise<void>;
	totalRoomsAvailabled: number;
};

export function useGetTotalRoomsAvailabled(): useGetTotalRoomsAvailabledTypes {
	const [loading, setLoading] = useState(false);
	const [totalRoomsAvailabled, setTotalRoomsAvailabled] = useState(0);

	const getTotalRoomsAvailabled = useCallback(async (customerId: string): Promise<void> => {
		try {
			setLoading(true);

			const { response } = await roomsApi.getTotalRoomsAvailable(customerId);

			setTotalRoomsAvailabled(response.availableAmount);
		} catch (error) {
			console.log('Error in get total rooms availabled', error);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, getTotalRoomsAvailabled, totalRoomsAvailabled };
}
