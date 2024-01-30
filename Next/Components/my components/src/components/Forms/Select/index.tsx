'use client';

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
	AreaInput,
	InputComponent,
	IconLeft,
	Icon,
	BoxList,
	Message,
} from './styles';
import { MdKeyboardArrowDown } from 'react-icons/md';

type InputTypes = {
	label: string;
	required?: boolean;
	value?: string | number | boolean;
	placeholder?: string;
	iconLeft?: JSX.Element;
	children: ReactNode;
	onChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

type OptionProps = {
	value: string;
	onClick?: () => void;
};

export const Select = (props: InputTypes): JSX.Element => {
	const {
		label,
		required,
		placeholder,
		iconLeft,
		children,
		onChange = () => null,
		...rest
	} = props;
	const [openSelect, setOpenSelect] = useState(false);
	const selectRef = useRef<HTMLInputElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [error, setError] = useState<string>('');

	const getValues = (value: string) => {
		onChange(value);
		if (selectRef.current) {
			selectRef.current.value = value;
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

	return (
		<Content ref={contentRef} onBlur={handleValidation}>
			<Label>{label}</Label>
			<AreaInput onClick={() => setOpenSelect(!openSelect)} $status={error}>
				{iconLeft && <IconLeft>{iconLeft}</IconLeft>}
				<InputComponent
					placeholder={placeholder}
					$status={error}
					ref={selectRef}
					{...rest}
					readOnly
				/>
				<Icon $open={openSelect}>
					<MdKeyboardArrowDown size={18} color="#9b98a8" />
				</Icon>
			</AreaInput>
			{error && <Message>{error}</Message>}
			<BoxList $open={openSelect}>
				{Children.map(children, (child, index) => {
					if (isValidElement<OptionProps>(child)) {
						const optionProps = child.props as OptionProps;
						return cloneElement(child, {
							key: index,
							onClick: (): void => {
								getValues(optionProps.value);
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
