import styled from 'styled-components';

type DotsProps = {
	$active: boolean;
};

export const CarouselContainer = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
	overflow: hidden;

	@media (max-width: 900px) {
		overflow: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

export const SlideContainer = styled.div`
	display: flex;
	transition: transform 0.5s ease;
	cursor: grab;
`;

export const SlideFrame = styled.div`
	flex: 0 0 100%;
	max-width: 100%;
	padding: 0 5px;

	/*@media (max-width: 900px) {
		margin: 0 -3%;
	}*/
`;

export const AreaDots = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
	position: absolute;
	//z-index: 2;
	bottom: 0;
`;

export const Dots = styled.div<DotsProps>`
	width: 35px;
	height: 10px;
	border-radius: 4px;
	background: ${props => (props.$active ? '#11314b' : '#d1caca')};
	cursor: pointer;

	&:active {
		background: #5aa8e9;
	}
`;
