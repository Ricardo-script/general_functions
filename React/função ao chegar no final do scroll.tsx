import { useRef } from 'react';

export const BoxPanel = ({
	title,
	children,
	minWidth,
	maxWidth,
	overflow = 'auto',
	Scrollstyle,
}: BoxPanelProps): JSX.Element => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		const element = scrollRef.current;
		if (element) {
			// Verifica se chegou ao final
			const isAtBottom =
				element.scrollHeight - element.scrollTop === element.clientHeight;
			if (isAtBottom) {
				alert('Você chegou ao final do scroll!');
			}
		}
	};

	return (
		<Container $minWidth={minWidth} $maxWidth={maxWidth}>
			<Title>{title}</Title>
			<ScrollView
				ref={scrollRef}
				$overflow={overflow}
				style={Scrollstyle}
				onScroll={handleScroll}
			>
				{children}
			</ScrollView>
		</Container>
	);
};


//styles:

'use client';

import styled from 'styled-components';

type OverFlowProps = {
	$overflow?: 'auto' | 'hidden' | 'scroll';
};

type BoxPanelProps = {
	$minWidth?: number | string;
	$maxWidth?: number | string;
};

const getType = (type: string | number): string => {
	if (typeof type === 'string') {
		return '';
	}
	return 'px';
};

export const Container = styled.section<BoxPanelProps>`
	width: ${props => (props.$maxWidth ? props.$maxWidth + getType(props.$maxWidth) : '100%')};
	height: auto;
	background: #fff;
	border-radius: 15px;
	padding: 17px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow-x: auto;

	&::-webkit-scrollbar {
		width: 6px;
		height: 6px;

		&-track-piece {
			background-color: #fff;
		}

		&-thumb:vertical,
		&-thumb:horizontal {
			background-color: #c5c5c5;
			border-radius: 5px;
		}

		&-thumb:vertical:hover,
		&-thumb:horizontal:hover {
			background-color: #717171;
		}
	}

	@media (max-width: 580px) {
		overflow-x: scroll;
	}
`;

export const Title = styled.span`
	font-family: 'Inter', sans-serif;
	color: #2d3748;
	font-size: 15px;
	font-weight: 600;
`;

export const ScrollView = styled.div<OverFlowProps>`
	overflow: ${props => props.$overflow};
	max-height: 100vh;
	padding-bottom: 10px;

	&::-webkit-scrollbar {
		width: 6px;
		height: 6px;

		&-track-piece {
			background-color: #fffefe;
		}

		&-thumb:vertical,
		&-thumb:horizontal {
			background-color: #c5c5c5;
			border-radius: 5px;
		}

		&-thumb:vertical:hover,
		&-thumb:horizontal:hover {
			background-color: #717171;
		}
	}
`;
