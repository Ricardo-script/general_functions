//src/services/api.ts

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/users'
});

export default api;

//------------------------------------------------------------------

//src/hooks/useApi.ts
import { useState } from 'react';
import api from "../services/api";

interface DadosApi{
	login: string,
	name: string,
}

export const useApi = () => {
    const [dados, setDados] = useState<DadosApi>();

    const execute = async() => {
        await api.get('ricardo-script')
        .then(res => {
            setDados(res.data)
        }).catch(err => {
            console.log('Erro ao listar dados');
        })
    }   

    return{ dados, execute }
}

//------------------------------------------------------------------
//App.tsx

import { useEffect } from "react";
import { useApi } from "./hooks/useApi"; //importar useApi


export default function App(){

	const { dados, execute } = useApi(); // desconstruir useApi com os retornos da função

	useEffect(() => {
		leitura(); 
	},[]); 

	const leitura = async() => {
		execute();
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