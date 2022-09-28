/*
@page funciona apenas para alterar as regras de impressão.
@media print permite que você defina outros estilos de classe, assim como @media screen.
*/

//Você pode usar @media print dentro de um componente de estilo wrapper, tornando-o em tela cheia, fixado com um fundo branco.

//Exemplo:

const PrintableBodyWrapper = styled.div`
  @media print {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  return (
    <div className="App">
        <PrintableBodyWrapper>
          <div style={{ width: 100, height: 100, background: "grey" }}>
            I will be printed
          </div>
        </PrintableBodyWrapper>
    </div>
  );
}
//Para alterar as regras de impressão, você precisa adicionar a página @ em um estilo global e renderizar o componente de estilo global.

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @page {
    size: landscape;
    margin: 5cm;
`;

const PrintableBodyWrapper = styled.div`
  @media print {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <PrintableBodyWrapper>
          <div style={{ width: 100, height: 100, background: "grey" }}>
            I will be printed
          </div>
        </PrintableBodyWrapper>
    </div>
  );
}