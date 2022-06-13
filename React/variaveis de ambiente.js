
//Para começar, devemos criar um arquivo na raiz do seu projeto, chamado .env.

//Todas nossas variáveis devem iniciar com REACT_APP_ para que o React entenda ela como uma variável de ambiente

//Feito isso, olha como ficaria nosso arquivo:


REACT_APP_BASE_URL=https://myendpoint.com/api

// para usar chamar antes process.env:


import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_HOST,
});

export default api;

//---------------------------------------------------------------------------------------------
//ex2:
render() {
  return (
    <div>
      <small>Endereço da aplicação <b>{process.env.REACT_APP_BASE_URL}</b> mode.</small>
    </div>
  );
}
