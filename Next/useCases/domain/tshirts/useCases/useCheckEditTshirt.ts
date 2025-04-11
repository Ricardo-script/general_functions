import { useCallback, useState } from 'react';
import { tshirtApi } from '../tshirtsApi';

type useCheckEditTshirtTypes = {
	loading: boolean;
	formIsEditable: boolean | undefined;
	checkEditTshirt: (customerId: string) => Promise<void>;
};

export function useCheckEditTshirt(): useCheckEditTshirtTypes {
	const [loading, setLoading] = useState(false);
	const [formIsEditable, setFormIsEditable] = useState<boolean>();

	const checkEditTshirt = useCallback(async (customerId: string): Promise<void> => {
		try {
			setLoading(true);
			const { response } = await tshirtApi.checkEditForm(customerId);

			setFormIsEditable(response.checkEdit);
		} catch (error) {
			console.log('Error in get check form tshirt availabled', error);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, checkEditTshirt, formIsEditable };
}
