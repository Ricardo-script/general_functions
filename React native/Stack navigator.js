/*
1- passo: expo install @react-navigation/native
2- Passo: expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
3- Passo: yarn add @react-navigation/native-stack
*/

// App.js é o primeiro componente a ser renderizado, sera o responsável para configurar o react navigation

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Sobre' component={Sobre} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// options:-------------------------------------------------------------------------------------
<Stack.Screen
	name='Home'
	component={Home}
	options={{
		title: 'Tela Inicial',
		headerStyle: {
			backgroundColor: '#121212' // fundo do header

		},
		headerTintColor: '#FFF', // cor do texto
		headerShown: false, // remove o header
	}}
/>

// remover header de todas as telas:-------------------------------------------------------------

<NavigationContainer>
	<Stack.Navigator
		screenOptions={{
			headerShown: false, // remove o header em todas as telas
		}}
	>
		<Stack.Screen
			name='Home'
			...

//---------------------------------------------------------------------------------------------------------------
// navegar entre os componentes com useNavigation
//Home.js
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Button title='Ir para sobre' onPress={() => navigation.navigate('Sobre')} />
        </View>
    );
}

// Enviando props por navegações:

const navegaSobre = () => {
	navigation.navigate('Sobre', { nome: 'Ricardo', email: 'rick@gmail.com'})
}

// para acessar esse objeto em Sobre: ----------------------------------------------------------------------------

export default function Sobre({ route }) { // recebe route, e através do params acessa as props
    return (
        <View>
            <Text>Tela Sobre</Text>
            <Text>{route.params?.nome}</Text> // o '?' é se caso não tiver dados não crashar a aplicação
        </View>
    );
}

//Acessando essas mesmas informações por hook: --------------------------------------------------------------------

import { useRoute } from '@react-navigation/native';
export default function Sobre() {

    const route = useRoute();
    
    return (
        <View>
            <Text>Tela Sobre</Text>
            <Text>{route.params?.nome}</Text>
        </View>
    );
}

// manipulando o titulo com useRoute: -------------------------------------------------------------------------------
import { useLayoutEffect } from 'react'; // diferente do useEffect que é assincrono o useLayoutEffect é sincrono
import { View, Text, StyleSheet } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Sobre() {

    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => { // ele só vai deixar prosseguir e montar a interface apenas qnd terminar de carregar o layoutEffect
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Página Sobre' : route.params?.nome//title: 'Teste titulo'
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text>Tela Sobre</Text>
            <Text>{route.params?.nome}</Text>
			 <Button title='Voltar' onPress={() => navigation.goBack()}/> //volta uma tela da pilha para traz
        </View>
    );
}

// Zerar a Pilha de navegação-------------------------------------------------------------------------------------------

import { useNavigation, StackActions } from '@react-navigation/native';

export default function Sobre() {
    const navigation = useNavigation();
	
	const handleHome = () => {
        navigation.dispatch(StackActions.popToTop()); // pop volta apenas uma para traz, popToTop quer dizer voltar para o inicio
    }

    return (
        <View style={styles.container}>
            <Text>Tela Sobre</Text>
            <Button title='Zerar Pilha' onPress={handleHome} />
        </View>
    );
	
}



 