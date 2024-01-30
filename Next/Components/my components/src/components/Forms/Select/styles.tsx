'use client';

type PropsOpen = {
	$open: boolean;
};

type InputProps = {
	$status?: string;
	$disabled?: boolean;
	$width?: number;
	$height?: number;
};

import { styled } from 'styled-components';

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;

	@media (max-height: 580px) {
		gap: 0;
	}
`;

export const AreaInput = styled.div<InputProps>`
	width: 100%;
	height: 33.5px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	padding: 0 10px;
	border-radius: 8px;
	border: 1px solid #99a7bd7d;
	transition: border-color 0.3s;
	overflow: hidden;

	&:hover {
		border: 1px solid #9ea3ac;
		transition: 0.5s;
	}

	&:focus-within {
		border: 1px solid ${props => (props.$status === '' ? '#1c64ff9b' : 'red')};
		box-shadow: 0px 0px 1px 2px ${props => (props.$status === '' ? '#1c64ff37' : '#ff05053e')};
	}
`;

export const InputComponent = styled.input<InputProps>`
	width: 100%;
	height: 26px;
	outline: none;
	border: 0;
	text-indent: 5px;
	color: #9b9191;
	font-size: 14px;
	font-weight: 300;

	&::placeholder {
		color: ${props => (props.$status === '' ? '#8a99b17b' : '#fa00008d')};
		font-size: 14px;
		font-weight: 500;
	}
	&:disabled {
		background: #dedede;
	}
`;

export const Label = styled.label`
	font-family: var(--font-Inter);
	color: #344054;
	font-weight: 500;
	font-size: 13px;
	line-height: 18px;
	margin-bottom: 2px;
`;

export const Icon = styled.div<PropsOpen>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 25px;
	height: 25px;
	user-select: none;
	color: #575555;
	rotate: ${props => (props.$open ? '180deg' : '0')};
	transition: 0.3s;
	cursor: pointer;
`;

export const IconLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const BoxList = styled.ul<PropsOpen>`
	width: 100%;
	background: #f3f3f3;
	border-radius: 5px;
	box-shadow: ${props => (props.$open === true ? '0px 3px 5px -1px #96969675' : 'none')};
	list-style-type: none;
	max-height: ${props => (props.$open === true ? '225px' : '0')};
	transition: max-height 0.1s ease-out;
	overflow-y: scroll;
	z-index: 2;
	padding: 0;
	position: absolute;
	top: 57px;
	cursor: pointer;

	&::-webkit-scrollbar {
		width: 7px;

		&-track-piece {
			background-color: #eee;
		}

		&-thumb:vertical,
		&-thumb:horizontal {
			background-color: #178368;
			border-radius: 5px;
		}

		&-thumb:vertical:hover,
		&-thumb:horizontal:hover {
			background-color: #717171;
		}
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
