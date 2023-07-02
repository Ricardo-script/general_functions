// yarn add @react-native-async-storage/async-storage
// utils/storage.ts:

import AsyncStorage from "@react-native-async-storage/async-storage";

type TypesStorage = {
    token: string | null;
    licenca: string | null;
};

export const getAsyncStorageValues = async (): Promise<TypesStorage> => {
    try {
        const token = await AsyncStorage.getItem('@app-token');
        const licenca = await AsyncStorage.getItem('@app-licenca');

        return { token, licenca };
    } catch (error) {
        console.log('Erro ao recuperar os valores do AsyncStorage:', error);
        throw error; // Adiciona o throw para lançar o erro
    }
};

//----uso:--------------------------------------------------------------------------

import { getAsyncStorageValues } from "../../utils/storage";

const getValues = async (): Promise<void> => {
	try{
		const { token, licenca } = await getAsyncStorageValues();
		console.log(token, licenca);
	}
	catch(error){
		console.log('Erro ao obter os valores do AsyncStorage:', error);
	}
}