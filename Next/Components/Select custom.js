'use client';

import { useState, Children, ReactElement, cloneElement, ReactNode } from 'react';
import { AreaSelect, SelectField, Value, AreaIcon, BoxList } from './styles';
import { IoMdArrowDropdown } from 'react-icons/io';

interface SintheticEvent {
	event: {
		target: {
			value?: string;
			name?: string;
		};
	};
}

type PropsSelectOnChange = {
	children: ReactNode;
	onChange?: (value: SintheticEvent) => void;
	name?: string;
	index?: number;
};

type OptionProps = {
	value: string;
	onClick?: () => void;
};

/**
 * ## Componente estilizado para o < select /> do html
 * @param onChange
 * Para pegar o valor selecionado do select declarar a props 'onChange' que recebe no parametro
 * um value, exemplo: onChange={value => console.log(value)} 
 * ```jsx
 * 	return event: {
		target: {
			value?: '123';
			name?: 'grupo';
		};
	};
 * -   uso: <Select name="grupo" onChange={value => console.log(value)}>
 * -   uso do componente chamando uma função:
 * -   <Select name="grupo" onChange={value => myCustomFunction(index,value)}>...options</Select>									
 * ```
 * @param children
 * recebe como parametro o children => < Options/>
 * @param name
 * recebe o name para utiliza-lo ao usar useRef
 * @returns
 */

export default function Select({ onChange, children, name }: PropsSelectOnChange): JSX.Element {
	const [openSelect, setOpenSelect] = useState(false);
	const [valueSelect, setValueSelect] = useState<SintheticEvent>({
		event: {
			target: {
				value: 'Selecione...',
				name: name
			}
		}
	});

	const handleSelect = () => {
		setOpenSelect(!openSelect);
	};

	const handleOptionClick = (value: string) => {
		setValueSelect({ // setState para poder mostrar o valor selecionado no value do input
			event: {
				target: {
					value: value,
					name: name
				}
			}
		});
		onChange?.({ // sera o retorno dos valores
			event: {
				target: {
					value: value,
					name: name
				}
			}
		});
	};

	return (
		<AreaSelect>
			<SelectField onClick={handleSelect}>
				<Value type="text" value={valueSelect.event.target.value} name={name} readOnly />
				<AreaIcon open={openSelect}>
					<IoMdArrowDropdown size={25} />
				</AreaIcon>
				<BoxList open={openSelect}>
					{Children.map(children, (child, index) => {
						return cloneElement(child as ReactElement<OptionProps>, {
							key: index,
							onClick: () =>
								handleOptionClick((child as ReactElement<OptionProps>).props.value)
						});
					})}
				</BoxList>
			</SelectField>
		</AreaSelect>
	);
}



//---------------------------------------------------------------------------------------------------------------------

//components/Form/Option

import { ReactNode } from 'react';
import { Item } from './styles';

/**
 * Componente estilizado para o < option /> do html
 * @param param0
 * Recebe como paramentro o children
 * @returns
 */

type propsOptions = {
	children: ReactNode;
	value: string | number;
	onClick?: () => void;
};

export default function Option({ children, onClick }: propsOptions): JSX.Element {
	return <Item onClick={onClick}>{children}</Item>;
}



//--------------------------------------------------------------------------------------------------------------------------
// Uso:

<Select name="departamento">
	<Option value="Item 1">Item 1</Option>
	<Option value="Item 2">Item 2</Option>
	<Option value="Item 3">Item 3</Option>
</Select>