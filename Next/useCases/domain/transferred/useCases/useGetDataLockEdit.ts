import { useCallback, useState } from 'react';
import { transferredApi } from '../transferredApi';

type UseGetDataLockEditTypes = {
	loading: boolean | undefined;
	dataLockEdit: DataLockEditTypes;
	getDataLockEdit: () => Promise<void>;
};

type DataLockEditTypes = {
	outBlocked: boolean;
	returnBlocked: boolean;
};

export function useGetDataLockEdit(): UseGetDataLockEditTypes {
	const [loading, setLoading] = useState<boolean>();
	const [dataLockEdit, setDataLockEdit] = useState<DataLockEditTypes>({
		outBlocked: false,
		returnBlocked: false,
	});

	const getDataLockEdit = useCallback(async (): Promise<void> => {
		try {
			setLoading(true);

			const { response } = await transferredApi.getDataLockEdit();
			setDataLockEdit({
				outBlocked: response.outBlocked,
				returnBlocked: response.returnBlocked,
			});
		} catch (error) {
			console.log('Error get data lock edit', error);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, getDataLockEdit, dataLockEdit };
}
