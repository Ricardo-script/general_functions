import { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

const ConnectionScreen = () => {
    return (
        <View>
            <Text>Não há conexão com a internet.</Text>
        </View>
    );
};

export default function Home(): JSX.Element {

    const [isConnected, setIsConnected] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            console.log('tipo de conexão', state.type);
            console.log('Esta conectado?', state.isConnected);
            setIsConnected(state.isConnected ?? false); // se for null ou undefined então (??) false
        });

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                isConnected
                    ? <Text>Página Home</Text>
                    : <ConnectionScreen />
            }
        </View>
    );
}