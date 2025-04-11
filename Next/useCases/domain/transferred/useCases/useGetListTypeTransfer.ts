import { useCallback, useState } from 'react';
import { transferredApi } from '../transferredApi';
import { ApiResponseListTypeTransfer } from '@/interfaces/TransferredInterface';

interface Result {
	name: string;
	value: string;
}

type useGetListTypeTransferTypes = {
	loading: boolean | null;
	getListTypeTransfer: () => Promise<ApiResponseListTypeTransfer['response'] | undefined>;
	listTypeTransfer: Result[];
};

export function useGetListTypeTransfer(): useGetListTypeTransferTypes {
	const [loading, setLoading] = useState<boolean | null>(null);
	const [listTypeTransfer, setListTypeTransfer] = useState<Result[]>([]);

	const getListTypeTransfer = useCallback(async () => {
		try {
			setLoading(true);
			console.log('chamou');
			const { response } = await transferredApi.getListTypeTransfer();
			const result: Result[] = Object.entries(response.transferType).map(([key, value]) => ({
				name: key
					.replace(/([a-z])([A-Z])/g, '$1 $2')
					.replace(/^./, str => str.toUpperCase()),
				value: value
					.replace(/([a-z])([A-Z])/g, '$1 $2')
					.replace(/^./, str => str.toUpperCase()),
			}));
			setListTypeTransfer(result);
			console.log(result);
			return response;
		} catch (error) {
			console.log('Error get data list type transfer', error);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, getListTypeTransfer, listTypeTransfer };
}
