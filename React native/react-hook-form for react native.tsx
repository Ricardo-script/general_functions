// install:

yarn add react-hook-form @hookform/resolvers zod

//----------------------------------------------------------------------

// simple example:

import { Input } from "@/components/forms/input";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";

export default function Index() {
    type FormData = {
        email: string;
    };

    const { handleSubmit, control } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <View className="flex-1 p-4 bg-slate-800">
            <Text className="pt-8 text-green-600 text-lg">Formulário</Text>
            <View className="mt-4 gap-4">
                <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Input
                            placeholder="E-mail"
                            value={field.value}
                            onChangeText={field.onChange}
                        />
                    )}
                />
                <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    );
}

//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
// advanced Exemple:

//Componente Input

import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

type InputTypes = {
    name: string;
    label?: string;
} & TextInputProps;

export const Input = <T extends FieldValues>({
    name,
    control,
    label,
    ...rest
}: UseControllerProps<T> & InputTypes) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <View className="gap-1">
                    <Text className="text-green-600">{label}</Text>
                    <TextInput
                        className="bg-slate-500 rounded-lg px-2"
                        value={field.value}
                        onChangeText={field.onChange}
                        {...rest}
                    />
                </View>
            )}
        />
    );
};

//how to use:

import { Input } from "@/components/forms/input";
import { useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";

export default function Index() {
    type FormData = {
        email: string;
    };

    const { handleSubmit, control } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <View className="flex-1 p-4 bg-slate-800">
            <Text className="pt-8 text-green-600 text-lg">Formulário</Text>
            <View className="mt-4 gap-4">
                <Input name="email" control={control} placeholder="E-mail" />
                <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    );
}

//===============================================================================
//===============================================================================
//===============================================================================
// exemple with zod:


// component input:

import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

type InputProps = {
    name: string;
    label?: string;
} & TextInputProps;

export const Input = <T extends FieldValues>({
    name,
    label,
    control,
    ...rest
}: UseControllerProps<T> & InputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <View className="gap-1">
                    <Text className="text-green-600 text-sm px-1">
                        {label && label}
                    </Text>
                    <TextInput
                        className="bg-slate-600 rounded-lg px-3"
                        value={field.value}
                        onChangeText={field.onChange}
                        {...rest}
                    />
                    <Text className="text-slate-400 text-[10px] px-2">
                        {fieldState.error?.message}
                    </Text>
                </View>
            )}
        />
    );
};

// how to use with zod:

import { Input } from "@/components/forms/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";
import { z } from "zod";

const formSchema = z.object({
    email: z.string().nonempty("O campo é obrigatório"),
    password: z.string().min(5, "Deve ter no minimo 5 caracteres"),
});

type FormDataTypes = z.infer<typeof formSchema>;

export default function Index() {
    const {
        handleSubmit,
        control,
        formState: { isValid },
    } = useForm<FormDataTypes>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    });

    const sendData = (data: FormDataTypes) => {
        console.log(data);
    };

    return (
        <View className="flex-1 p-4 bg-slate-800">
            <Text className="pt-8 text-green-600 text-lg">Formulário</Text>
            <View className="mt-4 gap-4">
                <Input
                    name="email"
                    control={control}
                    label="E-mail:"
                    placeholder="Insira seu E-mail"
                    placeholderTextColor="#869b8a"
                />
                <Input
                    name="password"
                    control={control}
                    label="Password"
                    placeholder="Insira sua senha"
                    placeholderTextColor="#869b8a"
                />
                <Button
                    title="Enviar"
                    onPress={handleSubmit(sendData)}
                    disabled={!isValid}
                />
            </View>
        </View>
    );
}

