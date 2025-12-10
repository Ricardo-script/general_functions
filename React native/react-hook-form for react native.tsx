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
