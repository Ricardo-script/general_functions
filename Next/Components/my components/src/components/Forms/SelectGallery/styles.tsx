import styled from 'styled-components';

export const Container = styled.div`
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
	font-family: var(--font-Poppins), sans-serif;
	font-size: 12px;
	font-weight: 500;
	color: #302f2f;

	&:hover {
		color: #4f8aa1;
		transition: 0.3s;
	}
`;
