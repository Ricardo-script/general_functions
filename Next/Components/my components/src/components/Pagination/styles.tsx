import styled from 'styled-components';

type PageProps = {
	$isActive?: boolean;
};

type BackgroundProps = {
	$backgroundColor: string;
};

export const Container = styled.div<BackgroundProps>`
	background: ${props => props.$backgroundColor};
	width: fit-content;
	min-width: 350px;
	height: 50px;
	padding: 5px 15px;
	display: flex;
	align-items: center;
	border-radius: 7px;
`;

export const List = styled.ul`
	display: flex;
	align-items: center;
	list-style-type: none;
	user-select: none;
	gap: 10px;
	padding: 5px;
`;

export const Page = styled.li<PageProps>`
	font-family: var(--font-Opensans), sans-serif;
	background: ${props => (props.$isActive ? '#23adad' : 'transparent')};
	color: ${props => (props.$isActive ? '#FFF' : '#2d4848')};
	font-size: 14px;
	font-weight: 700;
	width: 25px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 7px;
	cursor: pointer;

	&:hover {
		color: #19b4b4;
	}
`;

export const Prev = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 25px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:active {
		position: relative;
		top: 1px;
	}
`;

export const Next = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 25px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:active {
		position: relative;
		top: 1px;
	}
`;

export const Dots = styled.li`
	width: 25px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: var(--font-Opensans), sans-serif;
	color: #2d4848;
	font-size: 14px;
	font-weight: 600;
`;
