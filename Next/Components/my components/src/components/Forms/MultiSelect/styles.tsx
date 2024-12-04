import styled from 'styled-components';

type PropsOpen = {
	$open: boolean;
	$heightBox?: number;
};

type SelectProps = {
	$status?: string;
	$disabled?: boolean;
	$width?: number | string;
	$height?: number;
};

type StatusProps = {
	$status: boolean;
};

export const Container = styled.div<SelectProps>`
	width: ${props =>
		props.$width === 0
			? '100%'
			: typeof props.$width === 'number'
				? props.$width * 4 + 'px'
				: props.$width};
	display: flex;
	flex-direction: column;
	position: relative;
	pointer-events: ${props => (props.$disabled ? 'none' : 'auto')};
	opacity: ${props => (props.$disabled ? '0.5' : '1')};
	cursor: pointer;

	@media (max-height: 580px) {
		gap: 0;
	}
`;

export const InputSelect = styled.input<SelectProps>`
	width: 100%;
	height: 26px;
	outline: none;
	border: 0;
	text-indent: 5px;
	color: #9b9191;
	font-size: 14px;
	font-weight: 300;
	visibility: hidden;
	position: absolute;
	z-index: -1;

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

export const AreaSelect = styled.div<SelectProps>`
	width: 100%;
	height: auto;
	min-height: 33.5px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	border-radius: 8px;
	border: ${props => (props.$status === '' ? '1px solid #99a7bd7d' : '1px solid red')};
	transition: border-color 0.3s;
	overflow: hidden;
	background: #fff;

	&:hover {
		border: 1px solid #9ea3ac;
		transition: 0.5s;
	}

	&:focus-within {
		border: 1px solid ${props => (props.$status === '' ? '#1c64ff9b' : 'red')};
		box-shadow: 0px 0px 1px 2px ${props => (props.$status === '' ? '#1c64ff37' : '#ff05053e')};
	}

	@media (max-width: 600px) {
		height: 43px;
	}
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
	display: flex;
	flex-direction: column;
	gap: 5px;
	background: #f3f3f3;
	border-radius: 5px;
	box-shadow: ${props => (props.$open === true ? '0px 3px 5px -1px #96969675' : 'none')};
	list-style-type: none;
	max-height: ${props => (props.$open === true ? props.$heightBox + 'px' : '0')};
	transition: max-height 0.1s ease-out;
	overflow-y: scroll;
	z-index: 2;
	padding: 0;
	position: absolute;
	top: 100%; /* Ensures the dropdown is positioned below the AreaSelect */
	left: 0;
	right: 0;
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

export const AreaItem = styled.div<StatusProps>`
	width: 100%;
	display: flex;
	align-items: center;
	height: 40px;
	padding: 0 5px;
	pointer-events: ${props => (props.$status ? 'auto' : 'none')};
	opacity: ${props => (props.$status ? '1' : '0.7')};
	user-select: none;
	cursor: pointer;
	&:hover {
		background: #e7e4e4;
	}

	&:active {
		opacity: 0.7;
	}
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const Status = styled.div<StatusProps>`
	font-size: 11px;
	font-weight: 600;
	background: ${props => (props.$status ? '#54e25b' : '#fa5c5c')};
	color: #fff;
	padding: 2px 9px;
	border-radius: 5px;
`;

export const Item = styled.li`
	width: 100%;
	height: 30px;
	font-size: 13px;
	color: #494848;
	display: flex;
	align-items: center;
	user-select: none;
`;

export const ListSelected = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 10px;
	padding: 5px 10px;
`;

export const ItemSelected = styled.div`
	width: fit-content;
	font-size: 12px;
	color: #fff;
	display: flex;
	align-items: center;
	user-select: none;
	padding: 5px 15px;
	background: #437289;
	border-radius: 6px;
`;

export const Placeholder = styled.span`
	color: #8a99b1;
	font-size: 14px;
	font-weight: 500;
	opacity: 0.5;
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
