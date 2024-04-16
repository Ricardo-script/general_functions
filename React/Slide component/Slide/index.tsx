import { CarouselContainer, SlideContainer, SlideFrame, AreaDots, Dots } from './styles';

interface CarouselProps {
	slides: JSX.Element[];
	selectedIndex: number;
	setSelectedIndex: (prevIndex: number | ((prevIndex: number) => number)) => void;
}

export const Slide: React.FC<CarouselProps> = ({ slides, selectedIndex, setSelectedIndex }) => {
	return (
		<CarouselContainer>
			<SlideContainer style={{ transform: `translateX(-${selectedIndex * 100}%)` }}>
				{slides.map((slide, index) => (
					<SlideFrame key={index}>{slide}</SlideFrame>
				))}
			</SlideContainer>
			<AreaDots>
				{slides.map((_, index) => (
					<Dots
						key={index}
						$active={selectedIndex === index}
						onClick={() => {
							setSelectedIndex(index);
						}}
					/>
				))}
			</AreaDots>
		</CarouselContainer>
	);
};
