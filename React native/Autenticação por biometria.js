/*
    npx expo install expo-local-authentication

    para android não precisa fazer nenhuma configuração, para IOSprecisa adionar o plugin no app.json:

    {
        "expo": {
            "plugins": [
            [
                "expo-local-authentication",
                {
                "faceIDPermission": "Allow $(PRODUCT_NAME) to use Face ID."
                }
            ]
            ]
        }
    }

    tipos de autenticação: https://docs.expo.dev/versions/latest/sdk/local-authentication/#authenticationtype

    AuthenticationType.FINGERPRINT ＝ 1
    AuthenticationType.FACIAL_RECOGNITION ＝ 2
    AuthenticationType.IRIS ＝ 3 (somente IOS)

*/

import { useState, useEffect } from 'react'
import { Text, View, Button, Alert } from 'react-native'
import { styles } from './styles'
import * as LocalAuthentication from 'expo-local-authentication'

export default function App() {

    const [isAuthenticated, setIsAuthenticaded] = useState(false);

    //verificar se o dispositivo permite autenticação com biometria
    const verifyAvaiableAuthentication = async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        console.log('compatible', compatible)

        //verifica quais são os tipos para fazer autenticação
        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
        console.log('types', types)
        console.log(types.map(type => LocalAuthentication.AuthenticationType[type])); // retorna quais tipos do dispositivo podem fazer autenticação
    }

    //função de autenticação
    const handleAuthentication = async () => {
        const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync(); //verifica se existe alguma biometria cadastrada
        console.log('isBiometricEnrolled', isBiometricEnrolled)

        if (!isBiometricEnrolled) { // se não tiver biometria cadastrada
            return Alert.alert('Login', 'Não existe biometria cadastrada, cadastre no dispositivo!')
            // para cadastrar uma nova no android vá em configurações/segurança/biometria
        }

        //await LocalAuthentication.authenticateAsync() chama a autenticação
        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login com biometria',
            fallbackLabel: 'Biometria não reconhecida'
        });

        console.log('auth', auth)

        setIsAuthenticaded(auth.success);

    }

    useEffect(() => { verifyAvaiableAuthentication() }, []);


    return (
        <View style={styles.container}>
            <Text>Usuário conectado: {isAuthenticated ? 'Sim' : 'Não'} </Text>
            <Button title='Entrar' onPress={handleAuthentication} />
        </View>
    );
}


//========= Exemplo 2 =================================================================================================================================

//npx expo install expo-local-authentication

import { StyleSheet, Text, View, Button } from 'react-native';
import { 
   hasHardwareAsync,
   isEnrolledAsync,
   authenticateAsync 
} from 'expo-local-authentication';

export default function App() {

    const biometricsAuth = async () => {
        const compatible = await hasHardwareAsync()
        if (!compatible) throw 'Este dispositivo não é compatível com autenticação biométrica'
        const enrolled = await isEnrolledAsync()
        if (!enrolled) throw 'Este dispositivo não tem autenticação biométrica ativada'
        const result = await authenticateAsync()
        console.log('result', result)
        if (!result.success) throw `${result.error} - Falha na autenticação`
        return 
    }

    return (
        <View style={styles.container}>
            <Text>Autenticação por Biometria</Text>
            <Button title='Touch' onPress={biometricsAuth}/>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});