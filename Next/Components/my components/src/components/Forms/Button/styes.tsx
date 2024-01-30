'use client';

import styled, { keyframes } from 'styled-components';

type VariantTypes = 'contained' | 'outlined';
type ColorsTypes = 'neutral' | 'success' | 'info' | 'alert' | 'danger';
type ViewTypes = 'background' | 'border' | 'text' | 'hover';
type ListColors = Record<ColorsTypes, string>;

type ButtonProps = {
	$variant?: VariantTypes;
	$color?: ColorsTypes;
	$width: number;
};

const getColorValue = (color: ColorsTypes, type: ViewTypes = 'background') => {
	const colors: Record<string, ListColors> = {
		background: {
			neutral: '#FFF',
			success: '#32D583',
			info: '#7CD4FD',
			alert: '#F57F3C',
			danger: '#FF5F57',
		},
		border: {
			neutral: '#D0D5DD',
			success: '#32D583',
			info: '#7CD4FD',
			alert: '#F57F3C',
			danger: '#FF5F57',
		},
		text: {
			neutral: '#344054',
			success: '#32D583',
			info: '#2F7EAA',
			alert: '#F57F3C',
			danger: '#FF5F57',
		},
		hover: {
			neutral: '#e2e5eb',
			success: '#28bd73',
			info: '#6cbee4',
			alert: '#d87237',
			danger: '#e44c44',
		},
	};

	return colors[type][color] || colors[type]['neutral'];
};

export const Title = styled.span<Pick<ButtonProps, '$color' | '$variant'>>`
	font-family: var(--font-Inter);
	color: ${props =>
		props.$variant === 'contained'
			? '#FFF'
			: getColorValue(props.$color as ColorsTypes, 'text')};
	display: flex;
	font-size: 14px;
	font-weight: 600;
`;

export const Container = styled.div<ButtonProps>`
	width: ${props => (props.$width === 0 ? '100%' : props.$width * 4 + 'px')};
	height: 38px;
	background: ${props =>
		props.$variant === 'contained' ? getColorValue(props.$color as ColorsTypes) : '#FFF'};
	border: 1px solid ${props => getColorValue(props.$color as ColorsTypes, 'border')};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	border-radius: 8px;
	user-select: none;
	transition: background 0.3s;
	position: relative;
	cursor: pointer;

	&:active {
		opacity: 0.5;
		position: relative;
		top: 1px;
	}

	&:hover {
		background: ${props => getColorValue(props.$color as ColorsTypes, 'hover')};

		${Title} {
			color: ${props =>
				props.$variant === 'outlined' && props.$color === 'neutral' ? '#344054' : '#FFF'};
		}
	}

	@media (max-width: 768px) {
		user-select: none;
		-moz-user-select: none;
	}
`;

export const spinAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Spinner = styled.div<Pick<ButtonProps, '$color' | '$variant'>>`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background:
		radial-gradient(
				farthest-side,
				${props =>
						props.$variant === 'contained'
							? '#FFF'
							: getColorValue(props.$color as ColorsTypes, 'text')}
					3%,
				#0000
			)
			top/4px 4px no-repeat,
		conic-gradient(
			#0000 30%,
			${props =>
				props.$variant === 'contained'
					? '#FFF'
					: getColorValue(props.$color as ColorsTypes, 'text')}
		);
	mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
	-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
	animation: ${spinAnimation} 1s infinite linear;
	position: absolute;
	right: 20px;
`;
