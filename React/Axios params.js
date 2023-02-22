//---------------Páginação------------------------------------------------------------------------------------------------------------------------------------------------------------------

import { useEffect } from "react";
import axios from "axios";

export default function App() {

	useEffect(() => {

		const lerDados = async () => {
			await axios.get('https://api.github.com/repos/angular/angular/issues', {
				params: {
					per_page: 5, //exibe somente 5 itens
					page: 2     // referente a pagina 2
				}
			})
				.then(res => {
					console.log(res.data)
				})
				.catch(err => console.log(err))
		}

		lerDados();


	}, []);


	return (
		<div>Páginação</div>
	);
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function load() {
	const nomeRepo = decodeURIComponent(match.params.repositorio);

	const [repositorioData, issuesData] = await Promise.all([   // desconstrução --> repositorioData vai ser a 1º get, e issuesData é o 2º get
		api.get(`/repos/${nomeRepo}`),
		api.get(`/repos/${nomeRepo}/issues`, {
			params: {
				state: filters.find(f => f.active).state, // filtra a propriedade da url chamada state que é igual ao find, nesse exemplo é 'open' -> state: open
				per_page: 5 // get de apenas 5 itens
			}
		})
	]);

	setRepositorio(repositorioData.data);
	setIssues(issuesData.data);
	console.log(issuesData.data);

	setLoading(false);

}