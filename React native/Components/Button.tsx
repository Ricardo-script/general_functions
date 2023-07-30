//Button:

import { ButtonField, Title } from "./styles";

type ButtonTypes = {
    title?: string
    onPress: () => void
}

export const ButtonSend = ({ title, onPress }: ButtonTypes): JSX.Element => {

    return (
        <ButtonField onPress={onPress}>
            <Title>{title}</Title>
        </ButtonField>
    );
}
//Button Styles---------------------------------------------------------------

import { styled } from "styled-components/native";

export const ButtonField = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 45px;
    background: #73c477;
    border-radius: 5px;
    margin-top: 15px;
`;

export const Title = styled.Text`
    font-size: 15px;
    font-weight: 500;
    color: #273d1a;
`;