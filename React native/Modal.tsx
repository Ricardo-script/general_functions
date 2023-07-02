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

//------------------------------------------------------------------------------------------------------------------------------
//Exemplo:

import { Centralized, Content } from "./styles";
import { Modal, Text, Button } from "react-native";

type PropsModal = {
    status: boolean
    onClose: (newState: boolean) => void
}

export default function ModalCOmponent({status, onClose }: PropsModal){
    return(
        <Modal 
            animationType="slide"
            transparent={true}
            visible={status}
        >
            <Centralized>
                <Content style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 3.25,
                    shadowRadius: 1.84,
                    elevation: 5
                }}>
                    <Text style={{ color: '#413b3b', fontSize: 20 }}>Titulo</Text>
                    <Button title='Sair' onPress={() => onClose(false)}/>
                </Content>
            </Centralized>
        </Modal> 
    );
}

import { styled } from "styled-components/native";

export const Centralized = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    width: 92%;
    height: 250px;
    padding: 20px;
    background: #FFF;
    border-radius: 20px;
    align-items: center;
`;