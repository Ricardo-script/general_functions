import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { AreaInput, Label, InputContent } from "./styles";
import { TextInputProps } from "react-native";

type InputProps = {
    label?: string;
    placeholder?: string;
    name: string;
} & TextInputProps;

export const Input = <FormType extends FieldValues>({
    label,
    placeholder,
    name,
    control,
    defaultValue,
    ...rest
}: UseControllerProps<FormType> & InputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { onChange, value } }) => (
                <AreaInput>
                    <Label>{label}</Label>
                    <InputContent
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        {...rest}
                    />
                </AreaInput>
            )}
        />
    );
};


// ---------- uso: ---------------------------------------------------------------------------

import { Container, ContentSheet, Form } from "./styles";
import { HeaderRegister } from "../../../../components/HeaderRegister";
import { Input } from "../../../components/Input";
import { useForm } from "react-hook-form";

export interface EditDataTypes {
    nome: string;
}

export const EditData = (): JSX.Element => {
    const { control, getValues } = useForm<EditDataTypes>({
        defaultValues: {
            nome: "",
        },
    });
    return (
        <Container>
            <HeaderRegister
                title="Crie sua conta agora"
                subTitle="Registre-se agora para uma gestão educacional completa."
            />
            <ContentSheet>
                <Form>
                    <Input
                        name="nome"
                        label="Nome"
                        placeholder="Digite seu nome"
                        control={control}
                    />
                </Form>
            </ContentSheet>
        </Container>
    );
};

