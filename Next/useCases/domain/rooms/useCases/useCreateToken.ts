import { useCallback, useState } from 'react';
import { roomsApi } from '../roomsApi';

type UseCreateTokenTypes = {
	loading: boolean | undefined;
	createTokenAcceptOrReject: (customerId: string) => Promise<string | undefined>;
};

export function useCreateToken(): UseCreateTokenTypes {
	const [loading, setLoading] = useState<boolean>();

	const createTokenAcceptOrReject = useCallback(async (customerId: string) => {
		try {
			setLoading(true);

			const { response } = await roomsApi.createTokenAcceptOrReject(customerId);

			return response.token;
		} catch (error) {
			console.log('Error in use create token', error);
		}
	}, []);

	return { loading, createTokenAcceptOrReject };
}
