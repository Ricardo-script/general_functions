//domain/tshirts/useCases/useSaveFormTshirt

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

// uso:-----------------------------------------------------------------------------------------------

import { useSaveFormTshirt } from '@/domain/tshirts/useCases/useSaveFormTshirt';

const { saveFormTshirt, loading: loadingSaveFormTshirt } = useSaveFormTshirt({

    onSucess() {
        //....
    },
    onError(error) {
        //...
        setDialog({
            open: true,
            type: 'error',
            title: 'Formulário não enviado!',
            message: 'Não foi possivel enviar os dados! ' + error,
        });
    },


    const handleSaveFormTshirt = (): void => {
		saveFormTshirt(dataCustomer.id.id, getData().sizeTshirt);
	};
});
