import { useCallback, useState } from 'react';
import { roomsApi } from '../roomsApi';

type usetGetFormRoomAvailableTypes = {
	loading: boolean;
	isAvailableForm: boolean | undefined;
	getFormRoomAvailable: (available: string) => Promise<void>;
};

export function useGetFormRoomAvailable(): usetGetFormRoomAvailableTypes {
	const [loading, setLoading] = useState(false);
	const [isAvailableForm, setisAvailableForm] = useState<boolean>();

	const getFormRoomAvailable = useCallback(async (customerId: string): Promise<void> => {
		try {
			setLoading(true);

			const { response } = await roomsApi.getFormRoomAvailable(customerId);

			setisAvailableForm(response.available);
		} catch (error) {
			console.log('Error in get total rooms availabled', error);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, isAvailableForm, getFormRoomAvailable };
}
