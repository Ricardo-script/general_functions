'use client';

import { useState, useRef, ChangeEvent, InputHTMLAttributes } from 'react';
import { Container, Label, AreaInput, AreaIcon, InputContent, Message } from './styles';
import { cpfMask, phoneMask, plateMask } from '@/utils/functions/mask';

export type InputProps = {
	label?: string;
	required?: boolean;
	width?: number;
	height?: number;
	disabled?: boolean;
	maskType?: 'cpf' | 'telefone' | 'placa';
	iconLeft?: JSX.Element;
	iconRight?: JSX.Element;
	onClickIconLeft?: () => void;
	onClickIconRight?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

export type MaskOptions = {
	[key: string]: (value: string) => string;
};

export const Input = ({
	label,
	required,
	width = 0,
	height = 34,
	disabled = false,
	maskType,
	iconLeft,
	iconRight,
	onClickIconLeft,
	onClickIconRight,
	...rest
}: InputProps): JSX.Element => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [error, setError] = useState<string>('');

	const masks: MaskOptions = {
		cpf: cpfMask,
		telefone: phoneMask,
		placa: plateMask,
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (maskType !== undefined) {
			const selectedMask = masks[maskType];
			if (selectedMask) {
				const maskedValue = selectedMask(event.target.value);
				event.target.value = maskedValue;
			}
		}
	};

	const handleValidation = () => {
		if (required && inputRef.current?.value === '') {
			setError('O campo é obrigatório');
		} else {
			setError('');
		}
	};

	return (
		<Container $width={width}>
			<Label>{label}</Label>
			<AreaInput $status={error} $disabled={disabled} $height={height}>
				{iconLeft && (
					<AreaIcon
						$onClickIconLeft={!!onClickIconLeft}
						onClick={() => onClickIconLeft && onClickIconLeft()}
					>
						{iconLeft && iconLeft}
					</AreaIcon>
				)}
				<InputContent
					ref={inputRef}
					onBlur={handleValidation}
					onChange={handleInputChange}
					$disabled={disabled}
					$status={error}
					disabled={disabled}
					{...rest}
				/>
				{iconRight && (
					<AreaIcon
						$onClickIconRight={!!onClickIconRight}
						onClick={() => onClickIconRight && onClickIconRight()}
					>
						{iconRight && iconRight}
					</AreaIcon>
				)}
			</AreaInput>
			{error && <Message>{error}</Message>}
		</Container>
	);
};
