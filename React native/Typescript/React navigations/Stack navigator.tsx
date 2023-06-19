/*
1- passo: yarn add @react-navigation/native
2- Passo: expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
3- Passo: yarn add @react-navigation/native-stack
*/

// App.ts é o primeiro componente a ser renderizado, sera o responsável para configurar o react navigation

//App.tsx:-------------------------------------------------------------------------------------------------------------------------------------------------------------
import { NavigationContainer } from '@react-navigation/native'
import StackComponent from "./src/routes/stack";

export default function App() {
	return (
		<NavigationContainer>
			<StackComponent />
		</NavigationContainer>
	);
}

//src/routes/stack.tsx:-------------------------------------------------------------------------------------------------------------------------------------------------
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home";
import Sobre from '../screens/Sobre'

const Stack = createNativeStackNavigator();

export default function StackComponent() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Sobre' component={Sobre} />
        </Stack.Navigator>

    );
}}

//src/types/index.ts-----------------------------------------------------------------------------------------------------------------------------------------------------
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type StackNavigationTypes = {
    Home: undefined
    Sobre: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigationTypes>

//src/screens/Home-------------------------------------------------------------------------------------------------------------------------------------------------------

import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../types';

export default function Home() {

    const navigation = useNavigation<StackTypes>();

    return (
        <View>
            <Text>Tela Home</Text>
            <Button title='Ir para sobre' onPress={() => navigation.navigate('Sobre')} />
        </View>
    );
}

