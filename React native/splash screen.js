yarn add lottie-react-native

//src/routes.tsx------------------------------------------------------------------------------------------
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}> //initialRouteName = define Splash como sendo a 1ª
            <Stack.Screen name='Splash' component={Splash} />
             <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='TabBottom' component={BottomTab} options={{ statusBarColor: '#2d3330' }} />
        </Stack.Navigator>
    );
}

//src/screens/Splash----------------------------------------------------------------------------------

import { useEffect } from 'react'
import { useNavigation, CommonActions } from '@react-navigation/native'
import LottieView from 'lottie-react-native'


export default function Splash(): JSX.Element {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {                            
            navigation.dispatch(CommonActions.reset({ //reset apaga a pilha de telas e deixar apenas uma: index: 0 (nenhum,a tela além da proxima: Login)
                index: 0,                             // isso para que o usuário ao voltar do login não cair no Splash novamente
                routes: [{ name: 'Login' }]           // então direciono para qual rota eu quero navegar
            }))
        }, 4000);
    }, [])


    return (
        <LottieView
            source={require('../../assets/robo.json')}
            autoPlay
            loop
            resizeMode="contain"
        />
    );
}}
