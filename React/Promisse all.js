//Promisse.all() recebe um array como argumento, e quando todas as promisses forem resolvidas, 
//essa expressao retorna uma promisse

//-----------------------------------------------------------------------------------------------------------------
Promise.all(trailers.map(trailer =>
    axios.get(`${baseUrl}/${this.state.user.id}/${trailer.TrailerID}`)
    .then(res => {
      const vote = res.data[0].Vote;
      trailer.vote = vote;
    })
  ));
  
 
 
//---------------------------------------------------------------------------------------------------------------

import { useState, useCallback } from 'react';
import api from '../services/api';

export const useGetLancamentos = () => {

    const [acumulado, setAcumulado] = useState([]);

    const executeGetAcumulados = useCallback(async () => {

        const tokenUser = localStorage.getItem('@app-token');
        const licenca = localStorage.getItem('@app-licenca');
        const projeto = localStorage.getItem('@projeto');
        const params = `?filters[licenca][$eq]=${licenca}&filters[numero_projeto][$eq]=${projeto}`;

        const endpoints = [
            'lancamento-geomembranas',
            'lancamento-geotextils',
            'lancamento-geogrelhas',
            'lancamento-gcls',
            'lancamento-geocelulas',
            'lancamento-geocompostos',
        ];

        Promise.all(endpoints.map((endpoint) => api.get(endpoint + params, { headers: { Authorization: `Bearer ${tokenUser}` } }))).then(allResponses => {
            //console.log(allResponses)
			console.log('res ->>', allResponses[0].data); // [0] ou usar um forEach
            //setStates...
        });
    }, []);


    return { executeGetAcumulados }
}
//utilizando axios -----------------------------------------------------------------------------------------------
// Axios.all()
const endpoints = [
  "https://rickandmortyapi.com/api/character",
  "https://www.breakingbadapi.com/api/characters",
  "https://www.breakingbadapi.com/api/episodes",
  "https://www.breakingbadapi.com/api/quotes",
];
axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((allResponses) => {
	//console.log(allResponses)
    allResponses.forEach((response) => {
    console.log(response.data);
  });
});

//------------------------------------------------------------------------------------------------------------------------

	const [followers, setFollowers] = useState([])
	const [followings, setFollowing] = useState([])

  const getGithubData = () => {
    let endpoints = [
      'https://api.github.com/users/ejirocodes',
      'https://api.github.com/users/ejirocodes/repos',
      'https://api.github.com/users/ejirocodes/followers',
      'https://api.github.com/users/ejirocodes/following'
    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{data: user}, {data: repos}, {data: followers}, {data: followings}] )=> {
      setFollowers(followers)
      setFollowing(followings)
    });
  }
  
  //-------------------------------------------------------------------------------------------------------------------------------