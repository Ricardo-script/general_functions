import { Container } from "./styles";
import { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";

export const Input = forwardRef<TextInput, TextInputProps>((props, ref) => (
    <Container>
        <TextInput
            ref={ref}
            {...props}
            style={{
                height: 32,
                paddingHorizontal: 10,
            }}
        />
    </Container>
));

//----------------------------------------------------------------------------------------
import styled from "styled-components/native";

export const Container = styled.View`
    width: 90%;
    height: 40px;
    border: 1px solid #3a3939;
    border-radius: 5px;
    justify-content: center;
`;


//----------------------------------------------------------------------------------------

uso:

import React, { useRef } from "react";
import { Button, TextInput } from "react-native";
import { Container } from "./styles";
import { Input } from "./src/components/Input";

export default function App() {
    const nomeRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);

    return (
        <Container>
            <Input ref={nomeRef} />
            <Input ref={emailRef} />
            <Button title="Enviar" />
        </Container>
    );
}

