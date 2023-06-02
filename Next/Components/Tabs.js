const [tabPosition, setTabPosition] = useState(1);

<Tabs tabPosition={tabPosition} setTabPosition={setTabPosition} />
//----------------------------------------------------------------------------------------------------------------------
'use client';
import { Container, Line } from './styles';
import { PropsTabPosition } from '@/types';

export default function Tabs({ tabPosition, setTabPosition }: PropsTabPosition): JSX.Element {
	const selectTable = (tab: number): void => {
		setTabPosition(tab);
	};

	return (
		<Container>
			<label htmlFor="tab1">
				<input
					type="radio"
					id="tab1"
					value={1}
					onChange={e => selectTable(Number(e.target.value))}
					checked={tabPosition === 1}
				/>
				Anel 01
			</label>
			<label htmlFor="tab2">
				<input
					type="radio"
					id="tab2"
					value={2}
					onChange={e => selectTable(Number(e.target.value))}
					checked={tabPosition === 2}
				/>
				Anel 02
			</label>
			<label htmlFor="tab3">
				<input
					type="radio"
					id="tab3"
					value={3}
					onChange={e => selectTable(Number(e.target.value))}
					checked={tabPosition === 3}
				/>
				Anel 03
			</label>
			<label htmlFor="tab4">
				<input
					type="radio"
					id="tab4"
					value={4}
					onChange={e => selectTable(Number(e.target.value))}
					checked={tabPosition === 4}
				/>
				Anel 04
			</label>
			<Line position={tabPosition}></Line>
		</Container>
	);
}


// styles:
import { styled } from 'styled-components';

type PropsPositionLine = {
	position: number;
};

export const Container = styled.div`
	width: 90%;
	position: relative;
	font-size: 0;
	border-radius: 3px;
	overflow: hidden;

	input {
		display: none;
	}

	label {
		display: inline-block;
		font-size: 16px;
		height: 36px;
		line-height: 36px;
		width: 25%;
		text-align: center;
		background: #283034;
		color: #bdc4cb;
		position: relative;
		transition: 0.25s background ease;
		font-family: var(--font-poppins), sans-serif;
		font-weight: 400;
		font-size: 0.72rem;
		letter-spacing: 0.02857em;
		text-transform: uppercase;
		user-select: none;
		cursor: pointer;

		&::after {
			content: '';
			height: 3px;
			width: 100%;
			position: absolute;
			display: block;
			background: #ccc;
			bottom: 0;
			opacity: 0;
			left: 0;
			transition: 0.25s ease;
		}

		&:hover::after {
			opacity: 1;
		}
	}
`;

export const Line = styled.div<PropsPositionLine>`
	position: absolute;
	height: 3px;
	background: #2adf94;
	width: 25%;
	top: 33px;
	left: ${props =>
		props.position === 1
			? '0%'
			: props.position === 2
			? '25%'
			: props.position === 3
			? '50%'
			: '75%'};
	transition: 0.25s ease;
`;
