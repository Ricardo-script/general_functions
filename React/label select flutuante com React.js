import { useState } from "react";
import { Container, LabelFloat, SelectFloat, LabelField } from './styles';

export default function App(){

	const [values, setValues] = useState('');

	return(
		<Container>


			<LabelFloat>
				<SelectFloat value={values} onChange={(e) => setValues(e.target.value)}>
					<option value=""></option>
					<option value="1">1</option>
					<option value="2">2</option>
				</SelectFloat>
				<LabelField active={values}>Valores</LabelField>
			</LabelFloat>


		</Container>
	);
}

//-----------------------------------------------------------------------------------------------

import styled from 'styled-components';
//---------------------------------------------
export const Container = styled.div`
    width: 200px;
    margin: 50px 0 0 15px;
`;
//---------------------------------------------

export const LabelFloat = styled.div`
	position: relative;
`;

export const SelectFloat = styled.select`
	width: 100%;
    height: 25px;
    border: 1px solid #cdc3c3;
	outline: none;
`;

export const LabelField = styled.span`
	position: absolute;
    left: 7px;
    top: 4px;
    font-size: 15px;
	transform: ${props =>
    props.active ? 'translate3d(0,-21px,0) scale(0.80)' : 'none'}; // se tiver alguma coisa no state: translate3d(0,-98%,0) scale(0.80), se não 'none'
	pointer-events: none;
	transition: .3s;
`;