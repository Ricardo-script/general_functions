'use client'

import {
	useState,
	useEffect,
	InputHTMLAttributes,
	useRef,
	ReactNode,
	Children,
	isValidElement,
	cloneElement,
} from 'react';
import {
	Content,
	Label,
	Value,
	AreaInput,
	InputComponent,
	IconLeft,
	Icon,
	BoxList,
	Message,
} from './styles';
import { ArrowSelect } from 'src/assets/icons/ArrowSelect';

type InputTypes = {
	label: string;
	required?: boolean;
	value?: string | number | boolean;
	defaultValue?: string | number | boolean;
	placeholder?: string;
	iconLeft?: JSX.Element;
	children: ReactNode;
	width?: number | string;
	onChange?: (value: string) => void;
	onClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

type OptionProps = {
	children: string;
	value: string;
	onClick?: () => void;
};

type ValuesTypes = {
	value: string;
	children: string;
};

export const Select = (props: InputTypes): JSX.Element => {
	const {
		label,
		defaultValue,
		required,
		placeholder,
		iconLeft,
		children,
		width = 0,
		onClick,
		onChange = () => null,
		...rest
	} = props;

	const [openSelect, setOpenSelect] = useState(false);
	const selectRef = useRef<HTMLInputElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [error, setError] = useState<string>('');
	const [value, setValue] = useState('');

	const getValues = (value: ValuesTypes) => {
		onChange(value.value);
		if (selectRef.current) {
			selectRef.current.value = value.value;
			setValue(value.children);
			handleValidation();
		}
	};

	const handleValidation = () => {
		setTimeout(() => {
			if (required && selectRef.current?.value === '') {
				setError('O campo é obrigatório');
			} else {
				setError('');
			}
		}, 300);
	};

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

	useEffect(() => {
		if (selectRef.current) {
			// Atualiza o estado com o texto correspondente ao valor selecionado
			const selectedOption = Children.toArray(children).find((child: ReactNode) => {
				if (isValidElement<OptionProps>(child)) {
					return child.props.value === selectRef.current?.value;
				}
				return false;
			});
			if (selectedOption && isValidElement<OptionProps>(selectedOption)) {
				setValue(selectedOption.props.children as string);
			}
		}
	}, [selectRef, children]);

	return (
		<Content ref={contentRef} onBlur={handleValidation} $width={width}>
			<Label>{label}</Label>
			<Value>{value}</Value>
			<AreaInput
				onClick={() => {
					setOpenSelect(!openSelect);
					onClick && onClick();
				}}
				$status={error}
				open={openSelect}
			>
				{iconLeft && <IconLeft>{iconLeft}</IconLeft>}
				<InputComponent
					placeholder={placeholder}
					{...rest}
					ref={selectRef}
					readOnly
					defaultValue={defaultValue}
				/>
				<Icon open={openSelect}>
					<ArrowSelect />
				</Icon>
			</AreaInput>
			{error && <Message>{error}</Message>}
			<BoxList open={openSelect} $status={error}>
				{Children.map(children, (child, index) => {
					if (isValidElement<OptionProps>(child)) {
						const optionProps = child.props as OptionProps;
						return cloneElement(child, {
							key: index,
							onClick: (): void => {
								getValues(optionProps as ValuesTypes);
								if (optionProps.onClick) {
									optionProps.onClick();
								}
								setOpenSelect(!openSelect);
							},
						});
					}
					return child;
				})}
			</BoxList>
		</Content>
	);
};
