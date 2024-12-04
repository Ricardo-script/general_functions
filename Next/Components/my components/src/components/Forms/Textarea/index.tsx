'use client';

import { useState, useRef, ChangeEvent, TextareaHTMLAttributes } from 'react';
import { Container, Label, AreaInput, AreaIcon, TextContent, Message } from './styles';
import { cpfMask, phoneMask, plateMask } from '@/utils/functions/mask';

export type TextareaProps = {
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
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export type MaskOptions = {
	[key: string]: (value: string) => string;
};

export const Textarea = ({
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
}: TextareaProps): JSX.Element => {
	const textRef = useRef<HTMLTextAreaElement>(null);
	const [error, setError] = useState<string>('');

	const masks: MaskOptions = {
		cpf: cpfMask,
		telefone: phoneMask,
		placa: plateMask,
	};

	const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (maskType !== undefined) {
			const selectedMask = masks[maskType];
			if (selectedMask) {
				const maskedValue = selectedMask(event.target.value);
				event.target.value = maskedValue;
			}
		}
	};

	const handleValidation = () => {
		if (required && textRef.current?.value === '') {
			setError('O campo é obrigatório');
		} else {
			setError('');
		}
	};

	return (
		<Container $width={width}>
			<Label>{label}</Label>
			<AreaInput $status={error} $disabled={disabled}>
				{iconLeft && (
					<AreaIcon
						$onClickIconLeft={!!onClickIconLeft}
						onClick={() => onClickIconLeft && onClickIconLeft()}
					>
						{iconLeft && iconLeft}
					</AreaIcon>
				)}
				<TextContent
					ref={textRef}
					onBlur={handleValidation}
					onChange={handleInputChange}
					$disabled={disabled}
					$status={error}
					disabled={disabled}
					$height={height}
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
