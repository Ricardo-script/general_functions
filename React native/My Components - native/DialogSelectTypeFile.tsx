import {
    Centralized,
    Content,
    AreaOptions,
    MenuButtom,
    Button,
    Title,
} from "./styles";
import { Modal, TouchableWithoutFeedback } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";

type PropsModal = {
    open: boolean;
    onClose?: () => void;
    onSelectFile?: (result: DocumentPicker.DocumentPickerSuccessResult) => void;
};

const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 3.25,
    shadowRadius: 1.84,
    elevation: 5,
};

const documentTypes = [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf",
];

const imageTypes = ["image/png", "image/jpeg"];

const audioTypes = [
    "audio/mpeg",
    "audio/wav",
    "audio/x-wav",
    "audio/vnd.wav",
    "audio/aac",
    "audio/x-aac",
    "audio/ogg",
    "audio/x-ms-wma",
];

export const DialogSelectTypeFile = ({
    open,
    onClose,
    onSelectFile,
}: PropsModal): JSX.Element => {
    const pickDocument = async (types: string[]) => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: types,
            });

            if (result.assets !== null && result.assets[0].uri) {
                alert(result.assets[0].uri);
                onSelectFile && onSelectFile(result);
                onClose && onClose();
            } else {
                console.log(
                    "Operação de seleção de arquivo cancelada pelo usuário ou falhou"
                );
            }
        } catch (error) {
            console.log("Erro ao selecionar o arquivo:", error);
        }
    };

    return (
        <Modal animationType="slide" transparent={true} visible={open}>
            <TouchableWithoutFeedback onPress={onClose}>
                <Centralized>
                    <Content style={shadow}>
                        <AreaOptions>
                            <MenuButtom>
                                <Button
                                    onPress={() => pickDocument(documentTypes)}
                                >
                                    <FontAwesome
                                        name="file"
                                        size={18}
                                        color="#FFF"
                                    />
                                </Button>
                                <Title>Documento</Title>
                            </MenuButtom>
                            <MenuButtom>
                                <Button
                                    onPress={() => pickDocument(imageTypes)}
                                >
                                    <FontAwesome6
                                        name="image"
                                        size={22}
                                        color="#FFF"
                                    />
                                </Button>
                                <Title>Galeria</Title>
                            </MenuButtom>
                            <MenuButtom>
                                <Button
                                    onPress={() => pickDocument(audioTypes)}
                                >
                                    <MaterialIcons
                                        name="headphones"
                                        size={24}
                                        color="#FFF"
                                    />
                                </Button>
                                <Title>Galeria</Title>
                            </MenuButtom>
                        </AreaOptions>
                    </Content>
                </Centralized>
            </TouchableWithoutFeedback>
        </Modal>
    );
};



//------------------------------------------------------------------------------------------------------------------------------------------------------------
//styles:

import { styled } from "styled-components/native";

export const Centralized = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 50px;
`;

export const Content = styled.View`
    width: 50%;
    height: 75px;
    padding: 5px;
    background: #fff;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const AreaOptions = styled.View`
    flex-direction: row;
    gap: 15px;
`;

export const MenuButtom = styled.View`
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    background: #ae8fe7;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`;

export const Title = styled.Text`
    font-size: 8px;
`;

