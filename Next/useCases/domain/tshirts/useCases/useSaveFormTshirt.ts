import { useCallback, useState } from 'react';
import { tshirtApi } from '../tshirtsApi';
import { UseCaseOptions } from '@/interfaces/UseCaseOptions';
import { useFetchValidateToken } from '@/domain/auth/useCases/useFetchValidateToken';

type useSaveFormTshirtTypes = {
	loading: boolean;
	saveFormTshirt: (customerId: string, tshirt: string) => Promise<void>;
};

export function useSaveFormTshirt(options?: UseCaseOptions): useSaveFormTshirtTypes {
	const [loading, setLoading] = useState(false);
	const { fetchValidateToken } = useFetchValidateToken();

	const saveFormTshirt = useCallback(
		async (customerId: string, tshirt: string): Promise<void> => {
			try {
				setLoading(true);

				await fetchValidateToken(async () => {
					await tshirtApi.saveFormTshirt(customerId, tshirt);
				});

				options?.onSucess?.();
			} catch (error) {
				options?.onError?.(error);
				console.log('Error in save form tshirt', error);
			} finally {
				setLoading(false);
			}
		},
		[fetchValidateToken, options],
	);

	return { loading, saveFormTshirt };
}
