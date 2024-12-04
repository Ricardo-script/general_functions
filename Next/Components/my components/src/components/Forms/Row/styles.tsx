'use client';

import styled from 'styled-components';

type AreaRowProps = {
	$gap: number;
	$alignItems: 'center' | 'flex-end' | 'flex-start';
};

export const AreaRow = styled.div<AreaRowProps>`
	width: 100%;
	display: flex;
	align-items: ${props => props.$alignItems};
	gap: ${props => props.$gap + 'px'};

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;
