/*
useMemo => memoriza um valor
useCallback => memoriza uma função
memo => memoriza um componente (qual é o componente que esta renderizando de forma desnecessária? ) -> export default memo(nomeComponente)

// UseCallback não executa a função novamente
// UseMemo executa a função e memoriza o return da função
useCallback(funcao, [dependencias]); //-- memoriza somente a função
useMemo(() => funcao, [dependencias]); //-- executa a função e memoriza o retorno

*/

import React, { useState, useMemo } from 'react';

export default function App(){

	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState('');

	function addItemToList(){
		setItems([...items, `Item ${items.length}`]);
	}

	//const countItemsWithOne = items.filter(item => item.includes('1')).length;

	//Nessa função sem useMemo todas as vezes que qualquer calculo e state é alterado ele é montada em tela novamente
	//isso é demonstrado no console abaixo
	/*const countItemsWithOne = () => {
		console.log('chamou a função novamente');
		return items.filter(item => item.includes('1')).length;
	}*/

	//Nessa função com useMemo só é chamado somente quando alterar o state que ele usa nesse caso o state items
	const countItemsWithOne = useMemo(() => {
		console.log('chamou a função novamente');
		return items.filter(item => item.includes('1')).length;
	},[items]);

	return(
		<div>
			<input type="text" onChange={e => setNewItem(e.target.value)} value={newItem}/>
			<button onClick={addItemToList}>Add</button>
			<ul>
				{items.map(items => {
					return(
						<li key={items}>{items}</li>
					);
				})}
			</ul>
			<div>
				Contagem: {countItemsWithOne} {/*Sem useMemo {countItemsWithOne()} */}
			</div>
		</div>
	);
}

/* 
Quando criar qualquer tipo de calculo, código, seja função, variavel, no corpo do componente, toda vez que o React entrar 
no fluxo de rendererização todo o código será criado do zero, mesmo se determinada função não mudar, então toda vez que o 
estado mudar (ex: onChange) esse componente renderiza o app todo. Se uma lista for grande, um calculo pesado, uma lista de
5 mil items, nesses casos usar o useMemo. O useMemo irá fazer com que calculos dentro do componente não precisem ser
executados caso a informação que eles precisem não tenha sido alteradas, por exemplo para calcular 'countItemsWithOne' qual 
é a unica informação do componente que eu preciso? Somente o state 'items', esse calculo não depende de mais nada nem o outro
state 'newItem' se o state 'newItem' mudar não faz nenhum sentido pra ele não precisa recalcular de novo o 'countItemsWithOne', 
então para esses casos importar o 'useMemo' que recebe 2 parametros useMemo(() => {},[]); o primeiro é uma função {} irá retornar
o calculo que eu quero fazer nesse caso o 'countItemsWithOne', e o segundo parametro é o [] array de dependencia, nesse array ele 
fala quais são as informações que ele precisa pra executar,  e para esse exemplo ele só precisa do state 'item', ou seja somente
se esse state mudar então realiza o calculo 'countItemsWithOne'. Para verificar isso acontecendo colocar uma console.log dentro da
função do useMemo, para ver quando a função do 'countItemsWithOne' é disparado.
*/