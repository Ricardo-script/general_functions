import { View, ScrollView, Button, Modal } from "react-native";

export default function Home() {
	return (
        <Container>
			<Button title='Entrar' onPress={() => setModalVisible(true)} />
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <View style={{ backgroundColor: '#292929', width: '100%', height: 350 }}>
                    <Text style={{ color: '#FFF', fontSize: 28 }}>Seja Bem-vindo</Text>
                    <Button title='Sair' onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
		</Container>
	);
}

//animationType: slide, fade
//transparent={true}
// conteudo do modal: <View style={{ backgroundColor: '#292929', flex: 1 }}>

//Obs: Para deixar o modal centralizado então deve-se ter uma View rm voldar do componente que recebe o conteudo do Modal e 
//nela sim receber os estilos que irão centralizar ex:

<Modal animationType="slide" transparent={true} visible={modalVisible}>
	<View style={{ margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<ContentModal fechar={fechar} /> //contúdo do modal por component
	</View>
</Modal>