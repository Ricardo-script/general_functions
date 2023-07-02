import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native'
import { AxiosResponse } from 'axios';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api'


interface TypesLogin {
    email: string,
    jwt: string
}

export const useLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const login = async (): Promise<void> => {
        if ([email, password].includes('')) {
            return Alert.alert('Por favor preencha todos os campos!')
        } else {
            await api.post<TypesLogin>('/auth/local', {
                "identifier": email,
                "password": password,

            }).then((res: AxiosResponse) => {
                AsyncStorage.setItem('@app-token', res.data.jwt)
                AsyncStorage.setItem('@email', res.data.user.email)
                AsyncStorage.setItem('@password', password)

                navigation.navigate('TabBottom')

            }).catch(err => Alert.alert('Usuário ou Senha inválidos!', err))
        }
    }

    return { login, setEmail, setPassword }
}