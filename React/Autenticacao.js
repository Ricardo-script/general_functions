// Login.js
import React, { useState } from "react";
//import { history } from ''

function Login() {
	
	const [email, setEmail] = useState('');
	const [password, password] = useState('');
	
	async function Login() {
        await api.post('/auth/login', {
			"email": email,
			"password": password
		}).then(res => {
			if(res.data){
				localStorage.setItem('@app-token', res.data.token);
				history.push('/');
			}
		}
		}).catch(err => {})
	
}
//-------------------------------------------------------------------------------------------

//Routes.js
import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

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
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<PrivateRoute exact path="/" component={Home} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
//-------------------------------------------------------------------------------------------

//Api.js

import axios from 'axios';
const tokenUser = localStorage.getItem('@app-token');

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_HOST + "/",
    headers: {
        Authorization: `Bearer ${tokenUser}`, //passar o token armazenado do usuario 
    },

});

export default api;

//-------------------------------------------------------------------------------------------

//Auth.js

export const isAuthenticated = () => {
    const tokenAuth = localStorage.getItem('@app-token');
    if((tokenAuth !==null) && (tokenAuth !== undefined)){
        return true;
    } 
};

//Para logout => remover token do localStorage: localStorage.removeItem('@app-token');


