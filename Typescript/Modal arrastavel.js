import { useRef, RefObject } from 'react';

interface MyDivStyle {
	position: 'absolute';
	zIndex: string;
	backgroundColor: string;
	textAlign: 'center';
	border: string;
}

interface MyDivHeaderStyle {
	padding: string;
	cursor: 'move';
	zIndex: string;
	background: string;
	color: string;
}

export const Modal = (): JSX.Element => {
	const mydiv: MyDivStyle = {
		position: 'absolute',
		zIndex: '9',
		backgroundColor: '#f1f1f1',
		textAlign: 'center',
		border: '1px solid #d3d3d3'
	};

	const mydivheader: MyDivHeaderStyle = {
		padding: '10px',
		cursor: 'move',
		zIndex: '10',
		background: '#2196F3',
		color: '#fff'
	};

	const refModal: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const refHeader: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const dragElement = (): void => {
		let pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;

		const dragMouseDown = (e: MouseEvent): void => {
			e = e || window.event;
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
			// Verificar se 'refModal.current' não é nulo antes de atualizar as propriedades de estilo
			if (refModal.current) {
				refModal.current.style.top = `${refModal.current.offsetTop - pos2}px`;
				refModal.current.style.left = `${refModal.current.offsetLeft - pos1}px`;
			}
		};

		if (refHeader.current) {
			refHeader.current.onmousedown = dragMouseDown;
		} else if (refModal.current) {
			refModal.current.onmousedown = dragMouseDown;
		}

		const elementDrag = (e: MouseEvent): void => {
			e = e || window.event;
			e.preventDefault();
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			if (refModal.current) {
				refModal.current.style.top = `${refModal.current.offsetTop - pos2}px`;
				refModal.current.style.left = `${refModal.current.offsetLeft - pos1}px`;
			}
		};

		const closeDragElement = (): void => {
			document.onmouseup = null;
			document.onmousemove = null;
		};
	};

	return (
		<div ref={refModal} onMouseOver={() => dragElement()} style={mydiv}>
			<div ref={refHeader} style={mydivheader}>
				Click here to move
			</div>
			<p>Move</p>
			<p>this</p>
			<p>DIV</p>
		</div>
	);
};
//--------------------------------------------------------------------------------------------------------------------------------
// limitar arrastro do modal:
const elementDrag = (e: MouseEvent): void => {
	e = e || window.event;
	e.preventDefault();
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;

	if (refModal.current) {
		refModal.current.style.top = String(
			refModal.current.offsetTop - pos2 < 0
				? 0
				: refModal.current.offsetTop - pos2 + 'px'
		);
		refModal.current.style.left = String(
			refModal.current.offsetLeft - pos1 < 0
				? 0
				: refModal.current.offsetLeft - pos1 + 'px'
		);
	}
};
	


