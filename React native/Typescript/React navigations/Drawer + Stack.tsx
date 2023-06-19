/*
1- passo: yarn add @react-navigation/native
2- Passo: expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
3- Passo: yarn add @react-navigation/drawer
4- Passo: yarn add @react-navigation/native-stack

Após isso inserir o plugin no babel.config.js: pego em doc do reanimated

module.exports = {
    presets: [
      ...
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
  
 ***depois de mexer no config é necessario reestartar o app
  
 ***Para finalizar a instalação do react-native-gesture-handler, adicione o seguinte no topo (certifique-se de que está no topo e não há mais nada antes dele) 
 do seu arquivo de entrada, como index.jsou App.js antes de todos os imports:

import 'react-native-gesture-handler';

*/

//src/routes/Router.tsx-------------------------------------------------------------------------------------------------------------------------------------------------------
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import Details from "../screens/Details";

export type RootStackParamList = {
    Drawer: undefined;
    Details: { name: string } | undefined;
	Notification: undefined
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerTintColor: '#550AB1'
        }}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Notification' component={Notification} />
        </Drawer.Navigator>
    );
}

export default function Router() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='Drawer' component={DrawerNavigation} />
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
    );
}
//src/routes/ReactNavigation.tsx-------------------------------------------------------------------------------------------------------------------------------------------
//declare global é uma forma de declarar um escopo global para adicionar tipos personalizados em um módulo TypeScript
//RootParamList terá todos os tipos definidos em RootStackParamList, além de qualquer tipo adicional que você possa adicionar posteriormente.

import { RootStackParamList } from './Router';
declare global { 
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }  
    }
}

//App.tsx------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Inserir o NavigationContainer entre Router...
import 'react-native-gesture-handler'
import Router from './src/routes/Router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<NavigationContainer>
			<Router />
		</NavigationContainer>
	);
}
//src/screens/Home.tsx-------------------------------------------------------------------------------------------------------------------------------------------------------
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Tela Home</Text>
             <Button title='Go to Notifications' onPress={() => navigation.navigate('Notification')} />
            <Button title='OpenDrawer' />
            <Button title='Details' onPress={() => navigation.navigate('Details', { name: 'Ricardo Teixeira' })} />
        </View>
    );
}
//src/screens/Details.tsx-----------------------------------------------------------------------------------------------------------------------------------------------------
import { View, Text } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/Router';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>

export default function Details({ route }: ScreenProps) {

    const name = route?.params?.name

    return (
        <View>
            <Text>Tela Details {name}</Text>
            <Text>{name}</Text>
        </View>
    );
}



