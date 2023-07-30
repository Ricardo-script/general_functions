// chamada do componente
<Input label='Setor' onChangeText={(value) => Alert.alert(value)} />


//component

export const Input = ({ label, placeholder, value, onChangeText }: InputTypes): JSX.Element => {
    return (
        <Group>
            <Label>{label}:</Label>
            <InputField
                placeholder={placeholder}
                onChangeText={(value: ValuesType) => onChangeText && onChangeText(value)} // onChangeText recebeu um Alert
                value={value}
            />
        </Group>
    );
}

/*
    Como na chamada do componente foi inserido como props onChangeText um Alert, logo no componente onChangeText 
    representará um alert,
    Aqui nesse outro exemplo: <Input label='Setor' onChangeText={(value) => console.log(value)} /> a props onChangeText
    recebe uma função que recebe um parametro qualquer e retorna um console.log e no componente o parametro é alimentado
    com o value do onChangeText nativo do react-native, e a chamada agora da props que é um console.log do valor do parametro
    que foi recebido do value
*/

//-------Input Styles------------------------------------------------------------------------------------------------------------------------
import { styled } from "styled-components/native";

export const Group = styled.View`
    width: 100%;
`;

export const Label = styled.Text`
    padding-left: 7px;
    margin-bottom: 3px;
`;

export const InputField = styled.TextInput`
    background: #c9d1ce;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    justify-content: center;
    padding-left: 10px;
`;