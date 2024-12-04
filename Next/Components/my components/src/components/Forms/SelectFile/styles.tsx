import styled from 'styled-components';

type FileProps = {
	$width?: number | string;
};

export const Container = styled.div<FileProps>`
	width: ${props =>
		props.$width === 0
			? '100%'
			: typeof props.$width === 'number'
				? props.$width * 4 + 'px'
				: props.$width};
	display: flex;
	align-items: center;
	gap: 5px;
	user-select: none;
	cursor: pointer;

	&:active {
		opacity: 0.5;
		position: relative;
		top: 1px;
	}
`;

export const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

export const InputSelect = styled.input`
	display: none;
`;

export const Title = styled.span`
	font-family: var(--font-Inter), sans-serif;
	font-size: 12px;
	font-weight: 500;
	color: #444242;

	&:hover {
		color: #4f8aa1;
		transition: 0.3s;
	}
`;
