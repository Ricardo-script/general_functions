import { useState } from 'react';
import { CarouselContainer, SlideContainer, SlideFrame, AreaDots, Dots } from './styles';

interface CarouselProps {
	slides: JSX.Element[];
}

export const Slide: React.FC<CarouselProps> = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<CarouselContainer>
			<SlideContainer style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
				{slides.map((slide, index) => (
					<SlideFrame key={index}>{slide}</SlideFrame>
				))}
			</SlideContainer>
			<AreaDots>
				{slides.map((_, index) => (
					<Dots
						key={index}
						$active={currentIndex === index}
						onClick={() => {
							setCurrentIndex(index);
						}}
					/>
				))}
			</AreaDots>
		</CarouselContainer>
	);
};

import styled from 'styled-components';

type DotsProps = {
	$active: boolean;
};

export const CarouselContainer = styled.div`
	position: relative;
	width: 70%;
	margin: 0 auto;
	overflow: hidden;
`;

export const SlideContainer = styled.div`
	display: flex;
	transition: transform 0.5s ease;
`;

export const SlideFrame = styled.div`
	flex: 0 0 100%;
	max-width: 100%;
	padding: 0 5px;
`;

export const AreaDots = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
`;

export const Dots = styled.div<DotsProps>`
	width: 35px;
	height: 10px;
	border-radius: 4px;
	background: ${props => (props.$active ? '#11314b' : '#adcde6')};
	cursor: pointer;

	&:active {
		background: #5aa8e9;
	}
`;


//-----------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------
