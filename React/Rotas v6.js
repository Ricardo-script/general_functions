//React router dom v6

//install:
/* 
	npm install react-router-dom
	
	yarn add react-router-dom
*/

//-------------------------------------------------------------------------------------------------------------------------
//routes.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './services/auth';
import GlobalStyle from './GlobalStyle';
import Login from './pages/Login';
import Home from './pages/Principal/Home';
import Geomembrana from './pages/Cadastros/Geomembrana';

function PrivateRoute({ children }) {
	return isAuthenticated() ? children : <Navigate to="/" />;
}

const Navigation = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/Home' element={<PrivateRoute><Home /></PrivateRoute>} />
			<Route path='/Informacoes-Projeto' element={<PrivateRoute><Informacoes /></PrivateRoute>} />
			<Route path='/Configuracoes-Sistema' element={<PrivateRoute><Configuracoes /></PrivateRoute>} />
			<Route path='Geomembrana' element={<PrivateRoute><Geomembrana /></PrivateRoute>} />
		</Routes>
	</BrowserRouter>
);

export default Navigation;

//-------------------------------------------------------------------------------------------------------------------------

//auth.js -> /src/services/auth.js

export const isAuthenticated = () => {
	const tokenAuth = localStorage.getItem('@app-token');
	if ((tokenAuth !== null) && (tokenAuth !== undefined)) {
		return true;
	}
};

//-------------------------------------------------------------------------------------------------------------------------

//Navigation:

//Use Link para permitir que o usuário altere a URL ou useNavigate para fazer isso sozinho (como após o envio de formulários):

//LINK:
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1>Home</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="about">About</Link>
			</nav>
		</div>
	);
}


//USENAVIGATE:

function Redirect() {
	let navigate = useNavigate();
	function handleClick() {
		navigate('/home')
	}
	return (
		<div>
			<button onClick={handleClick}>go home</button>
		</div>
	);
}

//-----------------------------------------------------------------------------------------------------------------------------




