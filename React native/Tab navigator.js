/*
1- passo: expo install @react-navigation/native
2- Passo: expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add @react-navigation/bottom-tabs

*/
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Contato from "./src/screens/Contato";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name='Home' component={Home}/>
				<Tab.Screen name='Sobre' component={Sobre} />
				<Tab.Screen name='Contato' component={Contato} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

// Utilizando os icones-------------------------------------------------------------
//expo install @expo/vector-icons
import { Feather } from "@expo/vector-icons";

<Tab.Navigator>
	<Tab.Screen
		name='Home'
		component={Home}
		options={{
			tabBarLabel: 'Inicio', // altera o nome da tab
			tabBarIcon: ({ color, size }) => { // cor do icone, e tamanho
				return <Feather name='home' color={color} size={size} /> //name é o nome do icone, pesquisar na documentação qual nome é o correto de cada um
			}
		}}
	/>
	<Tab.Screen name='Sobre' component={Sobre} />
	<Tab.Screen name='Contato' component={Contato} />
</Tab.Navigator>

//headerShown: false, remove o header
// estilizando a tab:
<NavigationContainer>
	<Tab.Navigator
		screenOptions={{
			headerShown: false, // remover o header de todas as telas
			tabBarHideOnKeyboard: true, // caso ativa 'true' a tela que tiver um input para digitar a tabbar não ficará sobre o teclado
			tabBarShowLabel: false, // remove as labels dos icones das tabs
			tabBarActiveTintColor: '#7c5295', //altera a cor do icone das tabs quando ativa
			tabBarStyle: {
				backgroundColor: '#202225', //altera cor de fundo da tab
				borderTopWidth: 0 // remove a pequena borda que vem padrão entre a tab e a tela
			}
		}}
	>
		<Tab.Screen
			name='Home'
		....

//----------------------------------------------------------------------------------
