//src/services/api.ts

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/users'
});

export default api;

//------------------------------------------------------------------

//src/hooks/useApi.ts
import api from "../services/api";

export const useApi = () => ({
    getInfo: async() => {
        const response = await api.get('ricardo-script');
        return response;
        //ou:
        /*let response;
        await api.get('ricardo-script')
        .then(res => {
            response = res.data;
        }).catch(err => {
            response = 'Erro ao listar dados';
            alert('Erro ao listar dados!')
        })
        return response;*/
    },

    setInfo: async() => {
		//...
    }
});
//-----------------------------------------------------------------

//App.tsx
import { useEffect, useState } from "react";
import { useApi } from "./hooks/useApi";

interface DadosApi{
	login: string,
	name: string,
}

export default function App(){

	const [dados, setDados] = useState<DadosApi>()
	const api = useApi();

	useEffect(() => {
		leitura(); 
	},[]); 

	const leitura = async() => {
		/*
		const response = await api.getInfo();
		setDados(response)*/
		await api.getInfo()
		.then(res => {
			setDados(res.data)
		}).catch(err => {
			alert('Erro ao listar dados!');
		})
	}

	return(
		<div>
			<h1>Infos</h1>
			<ul>
				<li>{dados?.login}</li>
				<li>{dados?.name}</li>
			</ul>
		</div>
	);
}