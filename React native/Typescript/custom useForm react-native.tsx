// src/hooks/useForm.tsx

import { useRef, createRef, RefObject } from "react";
import { TextInput } from "react-native";

type ValuesType = string | number | boolean;

type FieldRefs = { [key: string]: RefObject<TextInput> };

export const useForm = () => {
    const values = useRef<{ [key: string]: ValuesType }>({}); // objeto para enviar para requisição

    const fieldRef: FieldRefs = {}; //objeto que recebe valores para alimentar os inputs

    const register = (name: string) => { // cria ref
        const ref = createRef<TextInput>();
        fieldRef[name] = ref
        return { ref }
    }

    const setValues = (key: string, value: ValuesType) => { // seta os para values
        values.current[key] = value;
    };

    const clearData = () => {
        values.current = {}; // limpa o objeto
        Object.values(fieldRef).forEach(ref => ref.current?.clear()); // limpa os campos
    };

    const insertValues = () => {
        const predefinedValues: { [key: string]: string } = {
            nome: 'John Doe',
            email: 'johndoe@example.com',
            setor: 'TI',
        };
        values.current = predefinedValues;

        Object.entries(predefinedValues).forEach(([key, value]) => {
            const field = fieldRef[key].current;
            field?.setNativeProps({ text: value })
        });
    };


    return { setValues, values, clearData, insertValues, register };
};

// -------uso: ----------

import { TextInput, Button, View, StyleSheet } from 'react-native';
import { useForm } from './useForm';

export default function App(): JSX.Element {

    const { setValues, clearData, insertValues, register, values } = useForm();

    const viewValues = () => {
        console.log(values.current)
    }

    return (
        <View style={styles.container} >
            <TextInput
                {...register('nome')}
                placeholder="Nome"
                onChangeText={(text) => setValues('nome', text)}
                style={styles.input}
            />
            <TextInput
                {...register('email')}
                placeholder="Email"
                onChangeText={(text) => setValues('email', text)}
                style={styles.input}
            />
            <TextInput
                {...register('setor')}
                placeholder="Setor"
                onChangeText={(text) => setValues('setor', text)}
                style={styles.input}
            />
            <Button title="List Values" onPress={viewValues} />
            <Button title="Clear Data" onPress={clearData} />
            <Button title="Insert Predefined Value" onPress={insertValues} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        width: '90%',
    },
});