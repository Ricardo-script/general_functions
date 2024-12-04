'use client';

import styled from 'styled-components';

type FormProps = {
	$flexDirection: string;
	$alignItems: 'center' | 'flex-end' | 'flex-start';
	$gap: number;
	$padding: number;
	$width?: number | string;
};

export const FormContent = styled.form<FormProps>`
	width: ${props =>
		props.$width === 0
			? '100%'
			: typeof props.$width === 'number'
				? props.$width * 4 + 'px'
				: props.$width};
	display: flex;
	align-items: ${props => props.$alignItems};
	flex-direction: ${props => props.$flexDirection};
	gap: ${props => props.$gap + 'px'};
	padding: ${props => props.$padding + 'px'};
`;
