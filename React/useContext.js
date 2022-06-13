// criada pasta contextModal(index.jsx):
import React,{ createContext, useState } from 'react';

export const ModalContext = createContext({}); // criar variavel para retorno .Provider

export default function ModalContextProvider(props){
    const [modalAtivo, setModalAtivo] = useState('teste');

    return(
        <ModalContext.Provider value={{modalAtivo, setModalAtivo}}>
            {props.children}
        </ModalContext.Provider>
    );
}
//-------------------------------------------------------------------------------------------------
//arquivo routes.jsx:

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ModalContextProvider from './contextModal';

const Routes = () => (

  <ModalContextProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/stream" component={Stream} />
        <Route exact path="/TableTest" component={TableTest} />
        <Route exact path="/edicao_croqui/:id" component={PageEditMoni}/>
        <Route exact path="/monitoramento/:id" component={Monitoramento}/>
        <Route exact path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
  </ModalContextProvider>
);

export default Routes;
// agora posso acessar em qualquer component que esta encapsulado em <ModalContextProvider> em routes
//-----------------------------------------------------------------------------------------------------
import React, { useState, useContext} from 'react';
import { ModalContext } from '../../contextModal';

export default function App(){
	
	const {modalAtivo, setModalAtivo}  = useContext(ModalContext);
	
	return(
		<div>
			<h2>{modalAtivo}</h2>
		</div>
	);
}
