import React, { useRef } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

interface ObjectValues {
    nome: string;
    email: string;
    setor: string;
}

export default function App(): JSX.Element {
    const objectRef = useRef<ObjectValues>({ nome: '', email: '', setor: '' });

    const nomeRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);
    const setorRef = useRef<TextInput>(null);

    const listValues = () => {
        console.log(objectRef.current);
    };

    const setValueForKey = (key: keyof ObjectValues, value: string) => {
        objectRef.current[key] = value;
    };

    const clearData = () => {
        objectRef.current = { nome: '', email: '', setor: '' };
        nomeRef.current?.clear();
        emailRef.current?.clear();
        setorRef.current?.clear();
    };

    const insertPredefinedValue = () => {
        const predefinedValues: ObjectValues = {
            nome: 'John Doe',
            email: 'johndoe@example.com',
            setor: 'TI',
        };
        objectRef.current = predefinedValues;
        nomeRef.current?.setNativeProps({ text: predefinedValues.nome });
        emailRef.current?.setNativeProps({ text: predefinedValues.email });
        setorRef.current?.setNativeProps({ text: predefinedValues.setor });
    };

    return (
        <View style={styles.container} >
            <TextInput
                ref={nomeRef}
                placeholder="Nome"
                onChangeText={(text) => setValueForKey('nome', text)}
                style={styles.input}
            />
            <TextInput
                ref={emailRef}
                placeholder="Email"
                onChangeText={(text) => setValueForKey('email', text)}
                style={styles.input}
            />
            <TextInput
                ref={setorRef}
                placeholder="Setor"
                onChangeText={(text) => setValueForKey('setor', text)}
                style={styles.input}
            />
            <Button title="List Values" onPress={listValues} />
            <Button title="Clear Data" onPress={clearData} />
            <Button title="Insert Predefined Value" onPress={insertPredefinedValue} />
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

// Outros exemplos: ----------------------------------------------------------------------------------------------------------------------------


import { useRef } from "react";

type ValuesType = string | number | boolean;

export const useForm = () => {
    const formData = useRef<{ [key: string]: ValuesType }>({});
    const data = formData.current

    const setValue = (name: string, value: ValuesType) => {
        formData.current[name] = value
    };

    return { setValue, data };
};

/*
    { [key: string]: ValuesType }:
    defini que a referência mutável irá conter um objeto com chaves (keys) do tipo string 
    e valores (values) do tipo ValuesType. 
*/

/* 
    uso:

import { Form, Input, ButtonSend } from '../../components/Forms';
import { Container } from './styles'
import { useForm } from '../../hooks/useForm';

export default function Home() {

    const { setValue, data } = useForm();

    return (
        <Container>
            <Form>
                <Input label='Nome' onChangeText={(text) => setValue('nome', text)} /> // setValue 1º param é o name que será o nome da propriedade, 2° será o valor
                <Input label='E-Mail' onChangeText={(text) => setValue('email', text)} />
                <Input label='Setor' onChangeText={(text) => setValue('setor', text)} />
                <ButtonSend title='Enviar' onPress={() => console.log(data)} /> // data são os dados inseridos
            </Form>
        </Container>
    );
}


*/







//-----Mais Exemplos------------------------------------------------------------------------------------------------------------------------------------------
import { useRef } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		padding: 8,
		marginBottom: 16,
		width: '100%'
	},
});

const App: React.FC = () => {

	const valuesForm = useRef({
		nome: '',
		email: '',
		endereco: '',
	});

	const handleTextInputChange = (name: keyof typeof valuesForm.current, text: string) => {
		valuesForm.current[name] = text;
	};

	const viewValues = () => {
		console.log(valuesForm.current);
	};

	return (
		<View style={{ marginTop: 80, width: '100%', paddingLeft: 10, paddingRight: 10 }}>
			<TextInput
				style={styles.input}
				onChangeText={(text) => handleTextInputChange('nome', text)}
			/>
			<TextInput
				style={styles.input}
				onChangeText={(text) => handleTextInputChange('email', text)}
			/>
			<TextInput
				style={styles.input}
				onChangeText={(text) => handleTextInputChange('endereco', text)}
			/>
			<Button title="Get Value" onPress={viewValues} />
		</View>
	);
};

export default App;

//----------Com validate------------------------------------------------------------------------------------------
// useForm

import { useRef, useState } from "react";

type ValuesType = string | number | boolean;

export const useForm = () => {
    const [error, setError] = useState<{ [key: string]: boolean }>({})
    const formData = useRef<{ [key: string]: ValuesType }>({});
    const data = formData.current

    const setValue = (name: string, value: ValuesType) => {
        formData.current[name] = value

        if (formData.current[name] === '') {
            setError({ ...error, [name]: true })
        } else {
            setError({ ...error, [name]: false })
        }
    };

    return { setValue, data, error };
};

//usePost
export const usePost = (fieldsRequired: string[]) => {

    var permission = true;

    const execute = (data: object) => {
        if (permission) {
            console.log('chamou', data)
        }
    }

    const validate = (data: object) => {
        //verifica se algum campo requerido existe

        fieldsRequired.forEach((field) => {
            if (field in data === false) {
                console.log('faltou o campo ' + field)
                permission = false
                return
            }

            permission = true
        })

        //verifica se o campo esta vazio
        Object.entries(data).forEach(([key, value]) => {
            if (value === '' || value === null || value === undefined) {
                console.log(`O campo ${key} é obrigatório`)
                permission = false
                return
            }

            permission = true
        })

        return {
            execute: () => execute(data)
        }
    }

    return { execute, validate }
}

// uso:

import { usePost } from '../../hooks/usePost';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    const fieldsRequired = ['email', 'setor', 'nome']

    const { setValue, data, error } = useForm();
    const { validate, execute } = usePost(fieldsRequired);

    const sendData = () => {
        validate(data).execute
    }

    return (
        <Container>
            <Form>
                <Input label='Nome' onChangeText={(text) => setValue('nome', text)} error={error.nome} />
                <Input label='E-Mail' onChangeText={(text) => setValue('email', text)} error={error.email} />
                <Input label='Setor' onChangeText={(text) => setValue('setor', text)} error={error.setor} />
                <ButtonSend title='Enviar' onPress={() => sendData()} />
                <ButtonSend title='Lista' onPress={() => navigation.navigate('List')} />
            </Form>
        </Container>
    );
}

//--------------------------------------------------------------------------------------------------------------------------
