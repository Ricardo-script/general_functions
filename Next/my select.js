import { useState, Children, ReactElement, cloneElement, ReactNode } from 'react';
import { AreaSelect, SelectField, Value, AreaIcon, BoxList } from './styles';
import { IoMdArrowDropdown } from 'react-icons/io';

type PropsSelectOnChange = {
	children: ReactNode;
	onChange?: (value: string | undefined) => void;
	name?: string | undefined;
};

/**
 * Componente estilizado para o < select /> do html
 * @param onChange
 * Para pegar o valor selecionado do select declarar a props 'onChange' que recebe no parametro
 * um value, exemplo: onChange={value => console.log('selecionado =>', value)}
 * @param children
 * recebe como parametro o children => < Options/>
 * @param name
 * recebe o name para utiliza-lo ao usar useRef
 * @returns
 */

export default function Select({ onChange, children, name }: PropsSelectOnChange): JSX.Element {
	const [openSelect, setOpenSelect] = useState(false);
	const [value, setValue] = useState<string>('Selecione...');

	const handleSelect = () => {
		setOpenSelect(!openSelect);
	};

	const handleOptionClick = (value: string) => {
		if (onChange) {
			onChange(value);
		}
		setValue(value);
	};

	return (
		<AreaSelect>
			<SelectField onClick={handleSelect}>
				<Value type="text" value={value} name={name} readOnly /> {/* usado um input para pegar a propriedade nativa name a ser usado no useRef no component <Select name=''/>*/}
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

<Select name="departamento">
	<Option value="Item 1">Item 1</Option>
	<Option value="Item 2">Item 2</Option>
	<Option value="Item 3">Item 3</Option>
</Select>