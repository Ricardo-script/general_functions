// com uso de Typescript

import { useRef, useState, FormEvent } from "react";

interface FormInfo {
	name: string;
	email: string;
	password: string;
}

export default function GetFormData() {
	const [formInfo, setFormInfo] = useState < FormInfo > ({
		name: "",
		email: "",
		password: ""
	});

	const form = useRef < HTMLFormElement > (null);

	const formData = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.current) {
			const name = form.current?.name?.value;
			const email = form.current?.email?.value;
			const password = form.current?.password?.value;

			setFormInfo({ name, email, password });
			form?.current?.reset();// limpa todos os campos
		}
	};

	console.log(formInfo);

	return (
		<form action="" ref={form} onSubmit={formData}>
			<input type="text" name="name" />
			<input type="email" name="email" />
			<input type="password" name="password" />
			<input type="submit" />

			<div>
				<h2>{formInfo.name}</h2>
				<h2>{formInfo.email}</h2>
				<h2>{formInfo.password}</h2>
			</div>
		</form>
	);
}


//limpar um campo especifico
if (inputRef.current != null) { // evitando o erro de null
	inputRef.current.value = "";
}


//--------------------------------------------------------------------------------------------------

import { useRef, useState } from "react";

export default function GetFormData() {

	const [formInfo, setFormInfo] = useState(''); // uso de state caso quiser listar em tel

	const form = useRef();

	const formData = (e) => {
		e.preventDefault();

		const name = form.current.name.value;
		const email = form.current.email.value;
		const password = form.current.password.value;

		setFormInfo({ name, email, password })
		e.target.reset() // reseta os valores dos campos
	}

	console.log(formInfo)

	return (
		<form action="" ref={form} onSubmit={formData}>
			<input type="text" name="name" />
			<input type="email" name="email" />
			<input type="password" name="password" />
			<input type="submit" />

			<div> {/* uso de state caso quiser listar em tela*/}
				<h2>{formInfo.name}</h2>
				<h2>{formInfo.email}</h2>
				<h2>{formInfo.password}</h2>
			</div>
		</form>
	);
}

// typescript:

import { useRef } from 'react';

const ref = useRef < HTMLInputElement > (null);

//limpar campos no caso se tiver usando typescript:
if (inputRef.current != null) { // evitando o erro de null
	inputRef.current.value = "";
}

//------------------------------------------------------------------------------------------------------

import GetFormData from "./components/GetFormData";
export default function App() {
	return (
		<div>
			<GetFormData />
		</div>
	);
}

//---------------------------------------------------------------------------------------------------------

// mais exemplos:

import { useRef } from "react";
import { Section, Form, AreaButtons } from "./styles";
import { Title } from "src/components/Title";
import { Button, Input, Row } from "src/components/Forms";
import ImageUpload from "src/components/ImageUpload";

export const FormNewRegister = (): JSX.Element => {

	const form = useRef < HTMLFormElement > (null);

	const formData = (): void => {
		/*if (form.current) {
			const name = form.current?.nameUser.value;
			console.log(name)
		}*/

		if (form.current) {
			const formData = new FormData(form.current);
			const formValues: { [key: string]: string } = {}; //key é o name, necessario declarar o name nos inputs

			formData.forEach((value, key) => {
				formValues[key] = value as string;
			});

			console.log(formValues.nameUser); // Objeto com os valores do formulário
		}
	}

	return (
		<Section>
			<ImageUpload />
			<Form ref={form}>
				<Title>Dados Pessoais</Title>
				<Row>
					<Input name='nameUser' label='*Nome Completo' placeholder='Digite o nome completo' required />
					<Input name='CPF' label='*CPF' placeholder='000.000.000.-00' required maskType='cpf' />
				</Row>
				<Row>
					<Input label='Data' placeholder='Digite a data' type='date' />
					<Input label='Horário de Entrada' placeholder='Digite o horário' type='time' />
					<Input label='Veículo' placeholder='Digite o tipo de veículo' />
					<Input label='Placa' placeholder='Digite a placa do veículo' maskType='placa' />
				</Row>
			</Form>
			<AreaButtons>
				<Button title='Cancelar' type='secondary' width={195} />
				<Button title='Salvar' type='primary' width={195} onClick={formData} />
			</AreaButtons>
		</Section>
	);
}


//--------------------------------------------------------------------------------------------------------
// outro exemplo de uso:

import { useContext, useRef } from 'react';
import { GlobalContext } from 'src/context/GlobalContext';
import { Button, Form, Input } from 'src/components/Forms'
import { Container, AreaButtons, Link } from './styles'
import { ModalForgot } from '../ModalForgot';
import { Dialog } from 'src/components/Dialog';
import { useAuth } from 'src/hooks/useAuth';
import { AuthInterface } from 'src/interfaces/ResponseInterfaces';

export const FormLogin = (): JSX.Element => {

    const { login, loading } = useAuth();
    const form = useRef<HTMLFormElement>(null);

    const {
        openModalForgot,
        setOpenModalForgot,
        openDialog,
    } = useContext(GlobalContext);

    const formData = (): AuthInterface => {
        const login = form.current?.login.value;
        const password = form.current?.password.value;
        return { login, password }
    }

    const handleAuthentication = () => {
        login(formData())
    }

    return (
        <Container>
            {loading ? 'carregando...' : ''}
            <Form ref={form}>
                <Input name='login' label='Usuário' placeholder='Digite o CPF' maskType='cpf' />
                <Input name='password' label='Senha' placeholder='Senha' type='password' />
            </Form>
            <AreaButtons>
                <Button title='Entrar' type='primary' onClick={handleAuthentication} />
                <Link onClick={() => setOpenModalForgot(true)}>Esqueceu a Senha?</Link>
            </AreaButtons>
            <ModalForgot overlay open={openModalForgot} onClose={() => setOpenModalForgot(false)} />
            <Dialog
                overlay
                open={openDialog}
                message='Enviamos o pedido de alteração de senha para o seu gerente. Aguarde o contato.'
            />
        </Container>
    );
}

