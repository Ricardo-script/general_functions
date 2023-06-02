'use client';

import { AreaInput, Button, Value } from './styles';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

type PropsInputCounter = {
	onClickAddCounter?: () => void;
	onClickRemoveCounter?: () => void;
	value?: number;
};

/**
 * Componente estilizado para um contador
 * @param onClickAddCounter
 * Recebe uma função que sera chamada ao clicar no botão ( + ) 'adicionar', exemplo: onClickAddCounter={() => funcaoParaAdicionar()}
 * @param onClickRemoveCounter
 * Recebe uma função que sera chamada ao clicar no botão ( - ) 'remover' exemplo: onClickRemoveCounter={() => funcaoParaDiminuir()}
 * @returns
 */

export const InputCounter = ({
	onClickAddCounter,
	onClickRemoveCounter,
	value
}: PropsInputCounter): JSX.Element => {
	return (
		<AreaInput>
			<Button onClick={onClickRemoveCounter}>
				<HiMinusSm color="#FFF" size={18} />
			</Button>
			<Value>{value}</Value>
			<Button onClick={onClickAddCounter}>
				<HiPlusSm color="#FFF" size={18} />
			</Button>
		</AreaInput>
	);
};


//----------------------------------------------------------------------------------------------------------------------------------------------

//Types:

export type CounterState = {
	handleIncrementGrupo?: () => void
	handleDecrementGrupo?: () => void
	counterGrupo?: number
	handleIncrementVerdeSeguranca?: (index: number) => void // com array
	handleDecrementVerdeSeguranca?: (index: number) => void // com array
	counterVerdeSeguranca?: number[] // com array

}

//----------------------------------------------------------------------------------------------------------------------------------------------
// hooks


import { useState } from 'react';
import { CounterState } from '@/types';

//sem uso de array, somente um contador
export const useCounterGrupos = (): CounterState => {
	const [counterGrupo, setCounterGrupo] = useState<number>(0);

	const handleIncrementGrupo = (): void => {
		setCounterGrupo(currentCounter => currentCounter + 1);
	};

	const handleDecrementGrupo = (): void => {
		setCounterGrupo(currentCounter => (currentCounter === 0 ? 0 : currentCounter - 1));
	};

	return { handleIncrementGrupo, handleDecrementGrupo, counterGrupo };
};


// com uso de array com multiplos contadores
export const useCounterVerdeSeguranca = (): CounterState => {
	const [counterVerdeSeguranca, setCounterVerdeSeguranca] = useState<number[]>([0, 0]);

	const handleIncrementVerdeSeguranca = (index: number): void => {
		setCounterVerdeSeguranca(currentCounter => {
			const updatedCounter = [...currentCounter];

			if (index >= updatedCounter.length) { //counterVerdeSeguranca é inicializado como um array vazio [], se o index enviado não existir (index maior que a qtd existente) ele acrescenta um novo index iniciando do 0
				updatedCounter[index] = 0;
			}
			
			if (updatedCounter[index] === undefined) {
				updatedCounter[index] = 0;
			}

			updatedCounter[index] += 1;
			return updatedCounter;
		});
	};

	const handleDecrementVerdeSeguranca = (index: number): void => {
		setCounterVerdeSeguranca(currentCounter => {
			const updatedCounter = [...currentCounter];
			updatedCounter[index] = Math.max(0, updatedCounter[index] - 1);
			return updatedCounter;
		});
	};

	return { counterVerdeSeguranca, handleIncrementVerdeSeguranca, handleDecrementVerdeSeguranca };
};


//----------------------------------------------------------------------------------------------------------------------------------------------
// uso:
import { useCounterGrupos, useCounterVerdeSeguranca } from '@/hooks/useCounter';
import { InputCounter } from '@/components/Forms/InputCounter';

export const ContentModal = (): JSX.Element => {
	const { counterGrupo, handleDecrementGrupo, handleIncrementGrupo } = useCounterGrupos();

	const {
		counterVerdeSeguranca = [],
		handleDecrementVerdeSeguranca,
		handleIncrementVerdeSeguranca
	} = useCounterVerdeSeguranca();

	return (
		<Container>
			<InputCounter // sem array, somente um contador
				value={counterGrupo}
				onClickAddCounter={handleIncrementGrupo}
				onClickRemoveCounter={handleDecrementGrupo}
			/>
			// multiplos contadores
			<InputCounter
				value={counterVerdeSeguranca[0]}
				onClickAddCounter={() => handleIncrementVerdeSeguranca?.(0)} // '?.' Optional Chaining -> for nulo ou indefinido, a chamada da função será ignorada e não ocorrerá nenhum erro
				onClickRemoveCounter={() =>
					handleDecrementVerdeSeguranca?.(0)
				}
			/>
			<InputCounter
				value={counterVerdeSeguranca[1]}
				onClickAddCounter={() => handleIncrementVerdeSeguranca?.(1)}
				onClickRemoveCounter={() => handleDecrementVerdeSeguranca?.(1)}
			/>
		</Container>

//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
