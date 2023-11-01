/*
1- passo: expo install @react-navigation/native
2- Passo: expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
3- Passo: yarn add @react-navigation/drawer

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
  
  *depois de mexer no config é necessario reestartar o app
  
 Para finalizar a instalação do react-native-gesture-handler, adicione o seguinte no topo (certifique-se de que está no topo e não há mais nada antes dele) 
 do seu arquivo de entrada, como index.jsou App.js:

import 'react-native-gesture-handler';

*/

//src/routes.js------------------------------------------------------------------------------------------------------------------------------------------------------------------
import { createDrawerNavigator } from "@react-navigation/drawer";

import StackRoutes from "./stackRoutes";
import Sobre from "../screens/Sobre";
import Contato from "../screens/Contato";


const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='HomeStack' component={StackRoutes} />
            <Drawer.Screen name='Sobre' component={Sobre} />
            <Drawer.Screen name='Contato' component={Contato} />
        </Drawer.Navigator>
    );
}
//App.js-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import 'react-native-gesture-handler';
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<NavigationContainer>
			<Routes />
		</NavigationContainer>
	);
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//options
<Drawer.Navigator
	screenOptions={{
		headerShown: false, // esconde todos os headers
		drawerStyle: { // acessar propriedades de style do drawer
			backgroundColor: '#121212', // cor de fundo do drawer
		},
		drawerActiveBackgroundColor: '#383dbf', // cor de fundo do item-menu do drawer quando ativo
		drawerActiveTintColor: '#FFF', // cor da fonte do item-menu quando ativo
		drawerInactiveBackgroundColor: '#CCC', // cor de fundo do item-menu quando inativo
		drawerInactiveTintColor: '#000'// cor da fonte do item-menu quando inativo
	}}
>
	<Drawer.Screen name='HomeStack' component={StackRoutes} />
</Drawer.Navigator>



// abrir o Drawer através de um botão:--------------------------------------------------------------------------------------------------------------------------------------------
import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();

 <Button title='Abrir Drawer' onPress={() => navigation.openDrawer()} />
 
//Personalizar o Drawer-------------------------------------------------------------------------------------------------------------------------------------------------------
//Em routes, além da screenOptions, tbm tem a drawerContent que ira receber todo o conteudo da drawer:------------------------------------------------------------------------
import CustomDrawer from '../components/CustomDrawer'

<Drawer.Navigator
	drawerContent={CustomDrawer}
	screenOptions={{
		headerShown: false,
		drawerStyle: {
			width: '100%' //tamanho do drawer
		}
		drawerActiveBackgroundColor: '#00dae4', // cor de fundo do item-menu do drawer quando ativo
		drawerActiveTintColor: '#FFF', // cor da fonte do item-menu quando ativo
		drawerInactiveBackgroundColor: '#f1f1f1', // cor de fundo do item-menu quando inativo
		drawerInactiveTintColor: '#000',// cor da fonte do item-menu quando inativo
	}}
>
 </Drawer.Navigator>
 
 
//Criar dentro de src a pasta components:-----------------------------------------
//src/Components/CustomDrawer:
import { Text, View, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

//DrawerContentScrollView - inserir scroll caso haja muitos items dentro do drawer
//DrawerItemList - items do Drawer, o props traz todos os items de Drawer inseridos em routes
// ***obs: as alterações realizadas no arquivo de custom ao alterar tem que reiniciar o app

export default function CustomDrawer(props) { // em props eu posso receber toda a configuração inserida em screenOptions do Drawer em routes.js
    return (
        <DrawerContentScrollView {...props}>
            <View style={{
                width: '100%',
                height: 85,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30
            }}>
                <Image
                    source={require('../assets/perfil.png')}
                    style={{ width: 65, height: 65 }}
                />
                <Text style={{ color: '#000', fontSize: 17, marginTop: 5, marginBottom: 35 }}>
                    Bem-vindo!
                </Text>
            </View>
            <DrawerItemList {...props} />  // essas props se refere ao item que esta ativo, cores tudo isso do screenOptions
        </DrawerContentScrollView>
    )
}


// Abrir Drawer com DrawerActions:

import { Hamburguer } from 'src/assets/icons'
import { Container, ContentHeader, Title } from './styles';
import { Avatar } from '../Avatar';
import { TouchableOpacity } from 'react-native';
import { HeaderProps } from 'src/types';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export const Header = ({ title }: HeaderProps): JSX.Element => {

    const navigation = useNavigation();

    return (
        <Container>
            <ContentHeader>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Hamburguer />
                </TouchableOpacity>
                <Title>{title}</Title>
                <Avatar />
            </ContentHeader>
        </Container>
    );
}


