import { useCallback, useState } from 'react';
import { transferredApi } from '../transferredApi';
import {
	BodyResponseTransferOut,
	BodyResponseTransferReturn,
} from '@/interfaces/TransferredInterface';
import { UseCaseOptions } from '@/interfaces/UseCaseOptions';
import { useFetchValidateToken } from '@/domain/auth/useCases/useFetchValidateToken';

type UseSaveFormTransferTypes = {
	loading: boolean;
	saveFormTransferOut: (body: BodyResponseTransferOut) => Promise<void>;
	saveFormTransferReturn: (body: BodyResponseTransferReturn) => Promise<void>;
};

export function useSaveFormTransfer(options?: UseCaseOptions): UseSaveFormTransferTypes {
	const [loading, setLoading] = useState(false);

	const { fetchValidateToken } = useFetchValidateToken();

	const saveFormTransferOut = useCallback(
		async (body: BodyResponseTransferOut): Promise<void> => {
			try {
				setLoading(true);

				await fetchValidateToken(async () => {
					await transferredApi.saveFormTransferOut(body);
				});

				options?.onSucess?.();
			} catch (error) {
				console.log('Error in save form transferred', error);
				options?.onError?.(error);
			} finally {
				setLoading(false);
			}
		},
		[fetchValidateToken, options],
	);

	const saveFormTransferReturn = useCallback(
		async (body: BodyResponseTransferReturn): Promise<void> => {
			try {
				setLoading(true);
				await fetchValidateToken(async () => {
					await transferredApi.saveFormTransferReturn(body);
				});
				options?.onSucess?.();
			} catch (error) {
				console.log('Error in save form transferred', error);

				options?.onError?.(error);
			} finally {
				setLoading(false);
			}
		},
		[fetchValidateToken, options],
	);

	return { loading, saveFormTransferOut, saveFormTransferReturn };
}
