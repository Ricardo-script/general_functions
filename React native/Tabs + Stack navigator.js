// src/App.js 
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<NavigationContainer>
			<Routes />
		</NavigationContainer>
	);
}


// src/StackRoutes.js--------------------------------------------------------------------------------------------------------------------------------
// criado um arquivo a parte contendo as stacks
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from '../screens/Home'
import Detalhes from "../screens/Detalhes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Detalhes' component={Detalhes} />
        </Stack.Navigator>
    );
}

// src/Routes:---------------------------------------------------------------------------------------------------------------------------------------
//Ao invés de renderizar o Home então renderizar StackRoutes que contem Home e outros tela de stack
// NavigationContainer foi inserido na tela App.js

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackRoutes from "./stackRoutes";
import Home from "../screens/Home";
import Sobre from "../screens/Sobre";
import Contato from "../screens/Contato";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
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
                name='HomeStack'
                component={StackRoutes} //ao invés de renderizar o Home então renderizar StackRoutes que contem Home e outros tela de stack
                options={{
                    tabBarLabel: 'Inicio', // altera o nome da tab
                    tabBarIcon: ({ color, size }) => { // cor do icone, e tamanho
                        return <Feather name='home' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name='Sobre'
                component={Sobre}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name='file-text' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name='Contato'
                component={Contato}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name='phone-call' color={color} size={size} />
                    }
                }}

            />
        </Tab.Navigator>
    );
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------