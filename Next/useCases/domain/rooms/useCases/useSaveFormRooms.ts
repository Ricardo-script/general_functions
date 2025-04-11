import { useCallback, useState } from 'react';
import { roomsApi } from '../roomsApi';
import { UseCaseOptions } from '@/interfaces/UseCaseOptions';
import { useFetchValidateToken } from '@/domain/auth/useCases/useFetchValidateToken';

type useSaveFormRoomsTypes = {
	loading: boolean;
	saveFormRooms: (body: SaveFormRooms) => Promise<void>;
};

type SaveFormRooms = {
	ownerId: string;
	customersId: string[];
};

export function useSaveFormRooms(options?: UseCaseOptions): useSaveFormRoomsTypes {
	const [loading, setLoading] = useState(false);
	const { fetchValidateToken } = useFetchValidateToken();

	const saveFormRooms = useCallback(
		async ({ customersId, ownerId }: SaveFormRooms): Promise<void> => {
			try {
				setLoading(true);

				await fetchValidateToken(async () => {
					await Promise.all(
						customersId.map(customerId => roomsApi.saveFormRoom(customerId, ownerId)),
					);
				});

				options?.onSucess?.();
			} catch (error) {
				options?.onError?.(error);
				console.log('Error in save form room', error);
			} finally {
				setLoading(false);
			}
		},
		[fetchValidateToken, options],
	);

	return { loading, saveFormRooms };
}
