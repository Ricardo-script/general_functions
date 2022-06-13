
//arquivo routes.jsx

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth"; // arquivo contendo a validação de autenticação
import Login from "./pages/Login";
import Mapa from "./pages/Mapa";
import ImprimirLogs from "./pages/ImprimirLogs";
import PageEditMoni from "./pages/PageEditMoni";
import Monitoramento from "./pages/PageEditMoni/MonitoramentoCroqui";
import Dashboard from "./pages/Dashboard";
import Stream from "./pages/Stream";
import TableTest from './pages/Stream/TableTest';
import Relatorios from './pages/Relatorios';
import ModalContextProvider from './contextModal';
import Cameras from "./pages/Cameras";
import Estatisticas from "./pages/Estatisticas";
import NotFound from "./pages/404";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
)
const Routes = () => (
    <ModalContextProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute exact path="/mapa" component={Mapa} />
                <PrivateRoute exact path="/logsim" component={ImprimirLogs} />
                <PrivateRoute exact path="/board" component={Dashboard} />
                <PrivateRoute exact path="/stream" component={Stream} />
                <PrivateRoute exact path="/TableTest" component={TableTest} />
                <PrivateRoute exact path="/edicao_croqui/:id" component={PageEditMoni} />
                <PrivateRoute exact path="/monitoramento/:id" component={Monitoramento} />
                <PrivateRoute exact path="/relatorios" component={Relatorios} />
                <PrivateRoute exact path="/camera/:id_cruzamento" component={Cameras} />
                <PrivateRoute exact path="/estatisticas" component={Estatisticas} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </ModalContextProvider>
);

export default Routes;

//=======================================================================================================
// services/auth.jsx: arquivo de validação de autenticação

export const isAuthenticated = () => {
    const tokenAuth = localStorage.getItem('@central-de-falhas-greenwave/tokenAuth');
    if((tokenAuth !==null) && (tokenAuth !== undefined)){
        return true;
    } 
};

//=======================================================================================================
// pages/login.jsx
import React, { useState } from "react";

export default function Login() {
	
	async function handleLogin() {
    if( !email || !password || email === "" || password === ""){
      alert("Preencha todos os campos")
    }else{
    await api.post('/auth/login', {
        "email": email,
        "password": password
    }).then(res => {      
      const { name, permission } = res.data.user;
      if(email === values.email){
        Toast.success(`Bem vindo a Central de Semafórica ${name}`, 2500 , () => {            
          localStorage.setItem('@central-de-falhas-greenwave/tokenAuth', res.data.token );
          localStorage.setItem('@central-de-falhas-greenwave/permission',permission );
          window.location.href = "/mapa";
        });
      } 
      
    }).catch(err => {   
      try {
        if(err.response.data == undefined){
          Toast.fail('Erro ao logar, tente mais tarde !!', 3000);
          return
        }
        else if(err.response.data.mensagem === "Senha inválida"){
          const tentativasRestantes = err.response.data.tentativasRestantes;
          const maximoDeTentativas = err.response.data.maximoDeTentativas;
          setInfoSenha(`Senha incorreta (${tentativasRestantes} de  ${maximoDeTentativas} tentativas).`);
          setustatusInput('error');
  
        }else if(err.response.data.mensagem == "Usuário não encontrado"){
          setInfoEmail('Esse usuário não está cadastrado, verifique o e-mail digitado !');
          setustatusInput('error');
          
        }else if(err.response.data.mensagem === "Usuário bloqueado"){
          setInfoEmail('Usuário bloqueado, siga as instruções enviadas para seu e-mail !');
          setustatusInput('error');
        }
        
        else if(err.response.data.mensagem === "Email não autenticado"){
          Toast.fail('Confirme seu cadastro acessando seu e-mail!', 2500);
          setustatusInput('error');
        }
  
        else if(err.response.data.mensagem === "Licença expirada"){
          Toast.fail('Licença expirada', 2500);
          setustatusInput('error');
        }
       
      } catch (error) {
        history.push('/404');
      }
    })
    }
  };
}






