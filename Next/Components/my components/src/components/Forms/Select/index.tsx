'use client';

import { InputHTMLAttributes, useState, useRef, useEffect } from 'react';
import {
	Container,
	InputSelect,
	Label,
	AreaSelect,
	Icon,
	BoxList,
	ItemSelected,
	Name,
	Placeholder,
	Message,
	AreaItem,
	Item,
} from './styles';
import { MdKeyboardArrowDown } from 'react-icons/md';

export type DataSelectTypes = {
	name: string;
	value: string | number;
};

type SelectProps = {
	label?: string;
	required?: boolean;
	width?: number | string;
	heightBox?: number;
	data: DataSelectTypes[];
	placeholder?: string;
	defaultValue?: string | number;
	onChange?: (value: string) => void;
	onClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Select = ({
	label,
	required,
	width = 0,
	heightBox = 200,
	data,
	placeholder,
	defaultValue,
	onChange = () => null,
	onClick,
	...rest
}: SelectProps): JSX.Element => {
	const [openSelect, setOpenSelect] = useState(false);
	const [value, setValue] = useState<DataSelectTypes>();
	const [error, setError] = useState<string>('');
	const selectRef = useRef<HTMLInputElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const handleValidation = () => {
		setTimeout(() => {
			if (required && selectRef.current?.value === '') {
				setError('O campo é obrigatório');
			} else {
				setError('');
			}
		}, 300);
	};

	const getValues = (value: DataSelectTypes) => {
		onChange(value.value as string);
		setOpenSelect(false);
		if (selectRef.current) {
			selectRef.current.value = value.value as string;
			setValue(value);
			handleValidation();
		}
	};
	useEffect(() => {
		/*console.log('data', data);
		console.log('defaultValue', defaultValue);*/
		const valueDefaultIndex = data.findIndex(values => values.value === String(defaultValue));

		if (valueDefaultIndex >= 0) {
			setValue({ name: data[valueDefaultIndex].name, value: data[valueDefaultIndex].value });
		}
	}, [data, defaultValue]);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
				setOpenSelect(false);
			}
		};
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	return (
		<Container ref={contentRef} onBlur={handleValidation} $width={width} tabIndex={-1}>
			<Label>{label}</Label>
			<InputSelect {...rest} $status={error} ref={selectRef} defaultValue={defaultValue} />
			<AreaSelect
				onClick={() => {
					setOpenSelect(!openSelect);
					onClick?.();
				}}
				$status={error}
			>
				<ItemSelected>
					{value?.name !== '' && value?.name !== undefined ? (
						<Name>{value?.name}</Name>
					) : (
						<Placeholder>{placeholder && placeholder}</Placeholder>
					)}
				</ItemSelected>

				<Icon $open={openSelect}>
					<MdKeyboardArrowDown size={18} color="#9b98a8" />
				</Icon>
			</AreaSelect>
			{error && <Message>{error}</Message>}
			<BoxList $open={openSelect} $heightBox={heightBox}>
				{data &&
					data.map((items, index) => (
						<AreaItem key={index} onClick={() => getValues(items)}>
							<Item>{items.name}</Item>
						</AreaItem>
					))}
			</BoxList>
		</Container>
	);
};
