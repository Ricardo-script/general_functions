import { useRef, useState, FormEvent } from "react";

interface FormInfo {
	name: string;
	email: string;
	password: string;
}

export default function GetFormData() {
	const [formInfo, setFormInfo] = useState<FormInfo>({
		name: "",
		email: "",
		password: ""
	});

	const form = useRef<HTMLFormElement>(null);

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

//----------------------------------------------------------------------------------------------------------
//mais exemplos:
import { useRef } from "react";
import { Section, Form, AreaButtons } from "./styles";
import { Title } from "src/components/Title";
import { Button, Input, Row } from "src/components/Forms";
import ImageUpload from "src/components/ImageUpload";

export const FormNewRegister = (): JSX.Element => {

	const form = useRef<HTMLFormElement>(null);

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

