'use client';

import styled from 'styled-components';

type TextProps = {
	$status?: string;
	$disabled?: boolean;
	$width?: number;
	$height?: number;
};

type InputActionProps = {
	$onClickIconRight?: boolean;
	$onClickIconLeft?: boolean;
};

export const Container = styled.div<TextProps>`
	width: ${props => (props.$width === 0 ? '100%' : props.$width && props.$width * 4 + 'px')};
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const Label = styled.label`
	font-family: var(--font-Inter);
	color: #344054;
	font-weight: 500;
	font-size: 13px;
	line-height: 18px;
	margin-bottom: 2px;
`;

export const AreaInput = styled.div<TextProps>`
	width: 100%;
	border: 1px solid ${props => (props.$status === '' ? '#99a7bd' : 'red')};
	border-radius: 8px;
	display: flex;
	align-items: center;
	gap: 5px;
	pointer-events: ${props => (props.$disabled ? 'none' : 'auto')};
	opacity: ${props => (props.$disabled ? '1' : '0.5')};
	background: ${props => (props.$disabled ? '#E4E7EC' : 'transparent')};
	overflow: hidden;
	padding: 7px;

	&:hover {
		border: 1px solid #5e6166;
		transition: 0.5s;
	}

	&:focus-within {
		border: 1px solid ${props => (props.$status === '' ? '#1c64ff9b' : 'red')};
		box-shadow: 0px 0px 1px 2px ${props => (props.$status === '' ? '#1c64ff37' : '#ff05053e')};
	}
`;

export const AreaIcon = styled.div<InputActionProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 25px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: ${props => (props.$onClickIconLeft || props.$onClickIconRight ? 'pointer' : '')};

	&:active {
		position: ${props => (props.$onClickIconLeft || props.$onClickIconRight ? 'relative' : '')};
		top: 1px;
	}
`;

export const TextContent = styled.textarea<TextProps>`
	width: 100%;
	height: ${props => props.$height + 'px'};
	max-height: 120px;
	border: none;
	font-weight: 500;
	font-size: 14px;
	color: ${props => (props.$disabled ? '#E4E7EC' : '#000000')};
	background: ${props => (props.$disabled ? '#E4E7EC' : 'transparent')};
	outline: none;
	text-indent: 5px;
	&::placeholder {
		color: ${props => (props.$status === '' ? '#8a99b1' : 'red')};
		font-size: 14px;
		font-weight: 500;
	}
	&:disabled {
		background: #dedede;
	}

	&:-webkit-autofill {
		box-shadow: 0 0 0px 1000px white inset !important; /* remove o background padrão do browser quando preenche automaticamente os campos */
	}

	@media (max-width: 600px) {
		height: 100px;
		max-height: 200px;
	}
`;

export const Message = styled.span`
	font-weight: 500;
	font-size: 10px;
	line-height: 16.41px;
	color: red;
	position: absolute;
	bottom: -16px;
	right: 8px;
`;
