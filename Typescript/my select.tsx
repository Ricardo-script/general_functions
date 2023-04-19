//Components/Forms/Select.tsx:
import { useState, ReactNode, Children, ReactElement, cloneElement } from 'react';
import { AreaSelect, SelectField, AreaIcon, BoxList } from './styles';
import { IoMdArrowDropdown } from 'react-icons/io';

type PropsSelect = {
	onChange: (value: string | number) => void;
	children: ReactNode;
};

/**
 * Componente estilizado para o < select /> do html
 * @param param0
 * Para pegar o valor selecionado do select declarar a props 'onChange' que recebe no parametro
 * um value, exemplo: onChange={value => console.log('selecionado =>', value)}
 * @param param1
 * recebe como parametro o children => < Options/>
 * @returns
 */

export default function Select({ onChange, children }: PropsSelect): JSX.Element {
	const [openSelect, setOpenSelect] = useState(true);

	const handleSelect = () => {
		setOpenSelect(!openSelect);
	};

	const handleOptionClick = (value: string | number) => {
		onChange(value);
	};

	return (
		<AreaSelect>
			<SelectField onClick={handleSelect}>
				<AreaIcon open={openSelect}>
					<IoMdArrowDropdown size={25} />
				</AreaIcon>
				<BoxList open={openSelect}>
					{Children.map(children, child => {
						return cloneElement(child as ReactElement, {
							onClick: () => handleOptionClick((child as ReactElement).props.value)
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

<Select onChange={value => console.log(value)}>
	<Option value="Item 1">Item 1</Option>
	<Option value="Item 2">Item 2</Option>
	<Option value="Item 3">Item 3</Option>
	<Option value="Item 1">Item 1</Option>
	<Option value="Item 2">Item 2</Option>
	<Option value="Item 3">Item 3</Option>
	<Option value="Item 1">Item 1</Option>
	<Option value="Item 2">Item 2</Option>
	<Option value="Item 3">Item 3</Option>
</Select>