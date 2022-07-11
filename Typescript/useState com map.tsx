import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
	id: number;
	email: string;
	body: string;
}

function App() {

	const [user, setUser] = useState<[User]>();

	useEffect(() => {
		loadData();
	},[]);

	async function loadData(){
		await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
			.then( res => {setUser(res.data); console.log(res.data)})
			.catch( err => console.log(err))
	}

	return (
		<div>
			{user?.map( (item: User) => (
				<ul key={item.id}>
					<li>{item.id}</li>
					<li>{item.email}</li>	
				</ul>
			))}
		</div>
	);
}

export default App;

//----------------------------------------------------------------------------------------------------------

import { useState } from "react";

export default function App() {

	interface Types {
		nome: string,
		preco: number,
		caixa: number
	}

	const [frutas, setFrutas] = useState<Types[]>([
		{ nome: 'Melancia', preco: 20, caixa: 150 },
		{ nome: 'Laranja', preco: 15, caixa: 100 },

	]);

	return (
		<div>
			<table>
				<tr>
					<th>Nome</th>
					<th>Preço</th>
					<th>Caixa</th>
				</tr>
				{frutas.map((items) => (
					<tr>
						<td>{items.nome}</td>
						<td>{items.preco}</td>
						<td>{items.caixa}</td>
					</tr>
				))}
			</table>
		</div>
	);
}