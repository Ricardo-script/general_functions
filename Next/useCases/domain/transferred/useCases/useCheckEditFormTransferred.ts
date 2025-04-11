import { useCallback, useState } from 'react';
import { transferredApi } from '../transferredApi';

type useCheckEdirFormTransferredTypes = {
	loading: boolean;
	formIsEditable: boolean | undefined;
	checkEditFormTransferred: (customerId: string, typeTransfer: 'return' | 'out') => Promise<void>;
};

export function useCheckEdirFormTransferred(): useCheckEdirFormTransferredTypes {
	const [loading, setLoading] = useState(false);
	const [formIsEditable, setFormIsEditable] = useState<boolean>();

	const checkEditFormTransferred = useCallback(
		async (customerId: string, typeTransfer: 'return' | 'out'): Promise<void> => {
			try {
				setLoading(true);

				const { response } = await transferredApi.checkEditFormTransferred(
					customerId,
					typeTransfer,
				);
				setFormIsEditable(response.available);
			} catch (error) {
				console.log('Error in check form transferred availabled', error);
			} finally {
				setLoading(false);
			}
		},
		[],
	);

	return { loading, formIsEditable, checkEditFormTransferred };
}
