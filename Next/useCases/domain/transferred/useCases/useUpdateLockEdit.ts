import { useCallback, useState } from 'react';
import { transferredApi } from '../transferredApi';
import { UseCaseOptions } from '@/interfaces/UseCaseOptions';

type UseUpdateLockEditTypes = {
	loading: boolean | undefined;
	updateLockEdit: (typeTransfer: 'out' | 'return', blocked: boolean) => Promise<void>;
};

export function useUpdateLockEdit(options?: UseCaseOptions): UseUpdateLockEditTypes {
	const [loading, setLoading] = useState<boolean>();

	const updateLockEdit = useCallback(
		async (typeTransfer: 'out' | 'return', blocked: boolean): Promise<void> => {
			try {
				setLoading(true);
				options?.onSucess?.();
				await transferredApi.updateLockEdit(typeTransfer, blocked);
			} catch (error) {
				console.log('Error update data lock', error);
				options?.onError?.();
			} finally {
				setLoading(false);
			}
		},
		[],
	);

	return { loading, updateLockEdit };
}
