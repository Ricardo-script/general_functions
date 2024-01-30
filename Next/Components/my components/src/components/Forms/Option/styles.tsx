'use client';

import styled from 'styled-components';

export const Item = styled.li`
	height: 30px;
	font-size: 12px;
	color: #494848;
	display: flex;
	align-items: center;
	user-select: none;
	padding: 5px 15px;
	cursor: pointer;

	&:hover {
		background: #cacaca;
	}
`;
