//criar um arquivo chamado mask.js

export const cpfMask = value => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

/* 
Linha 1: exportando nossa função. Essa função é bem simples: ela simplesmente recebe um valor e o retorna.
Linha 3: substitui qualquer caractere que não seja número por nada.
Linha 4: captura 2 grupos de numero o primeiro de 3 números (\d{3})e o segundo de 1 número (\d). Após capturar o primeiro grupo de numero $1. ele adiciona um ponto antes do segundo grupo de numero $2.
Linha 6: faz o mesmo replace que as linhas 4 e 5, mas adiciona um - no lugar do ponto.
Linha 7: captura 2 números seguidos de um traço, ou seja, os três últimos caracteres do CPF e não deixa ser digitado mais nada.
*/

//utilizando:

import React, { Component } from 'react';
import { cpfMask } from './mask'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { documentId: '' }
    this.handlechange = this.handlechange.bind(this)
  }

  handlechange(e) {

    this.setState({ documentId: cpfMask(e.target.value) })
  }

  render() {
    const { documentId } = this.state
    return (
      <div className="App">
        <label>CPF</label>
        <input 
          maxLength='14'
          name='documentId'
          value={documentId}
          onChange={this.handlechange}
        />
      </div>
    )
  }
}

export default App