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