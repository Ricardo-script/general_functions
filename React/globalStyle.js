import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background: #7159c1;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root{ // tags que vão estar por volta da aplicação \ id root de index.html div que rendireza toda a aplicação
        height: 100%; // isso vai fazer com que a aplicação possa ocupar 100% da tela em altura sem isso não daria pra pegar 
        //uma div e colocar um heigth 100% nela pois ela não conseguiria ocupar a tela toda porque o html e o body não estariam ocupando a tela toda
    }
`

// feito isso importar no App.js : 

import React, { Component } from 'react';
import { Container, Content } from './styles';
import GlobalStyle from './styles/global';

class App extends Component{
    render(){
        return 
		<Container>
			<Content>Teste</Content>
			<GlobalStyle />
		</Container>
		<GlobalStyle/>
    }
}

export default App;

//obs:  não importa onde o component GlobalStyle esteja, se antes ou depois de algum outro componente ele sempre vai funcionar