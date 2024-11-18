import { Text, View } from "react-native";
import { Container } from "./styles";
import { useLocalSearchParams } from "expo-router";

export default function User(): JSX.Element {
    const { id } = useLocalSearchParams();

    return (
        <Container>
            <Text>Tela de Usuário com ID: {id}</Text>
        </Container>
    );
}
