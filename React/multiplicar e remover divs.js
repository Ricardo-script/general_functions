import { useState } from 'react';
import { Container } from './styles';

export default function App(){

	/**
	 * o value de dentro do state tem que de alguma forma estar inserido dentro do elemento
	 * como no exemplo abaixo ele esta inserido na div number: {items.numero}, se não inserir
	 * durante o delete do item mesmo que no console mostre corretamente indice acaba se perdendo para printar em tela
	 */


	const [element, setElement] = useState([
		{ numero: 0}
	]);

	const handleAddElement = () => {
		const values = [...element];
		values.push({ numero: element.length});
		setElement(values);
		console.log(values);
	}

	const deleteElement = (index) => {
		const values = [...element];
		values.splice(index,1);
		setElement(values);
		console.log(values);
	}


	return(
		<Container>
			{element.map((items,index) => (
				<div className='area-multiple'>
					<div className='number'>{items.numero}</div>
					<button onClick={() => deleteElement(index)}>Remove</button>
				</div>
			))}
			
			<button className='add' onClick={handleAddElement}>Add</button>
		</Container>
	);
}