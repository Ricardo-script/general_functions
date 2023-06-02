// ContainerModal index:

import { PropsWithChildren } from 'react';
import { Container } from './styles';

export const ContainerModal = ({ children }: PropsWithChildren): JSX.Element => {
	return <Container>{children}</Container>;
};


// styles:

import { styled } from 'styled-components';

export const Container = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	pointer-events: none;  //-> e o Modal com pointer-events: all para que eles possam ser clicaveis 
`;

//-----------------------------------------------------------------------------------------------------

//Modal index:

import { useState, useRef, RefObject } from 'react';
import { AreaModal, Header, AreaIcons, Icon, ContentModal } from './styles';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { FaRegWindowMaximize, FaRegWindowRestore } from 'react-icons/fa'; //FaRegWindowRestore
import { MdOutlineMinimize } from 'react-icons/md';
import { PropsModal } from '@/types';

export const Modal = ({ title, children }: PropsModal): JSX.Element => {
	const refModal: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const refHeader: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const [statusMinimize, setStatusMinimize] = useState(false);
	const [statusMaximize, setStatusMaximize] = useState(false);

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

			if (statusMinimize) {
				return;
			}

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

		const closeDragElement = (): void => {
			document.onmouseup = null;
			document.onmousemove = null;
		};
	};

	const restartCloseDrag = (): void => {
		if (refModal.current) {
			refModal.current.removeAttribute('style');
		}
	};

	const maximize = () => {
		if (refModal.current) {
			if (refModal.current.style.inset === '0px') {
				refModal.current.removeAttribute('style');
				setStatusMaximize(false);
			} else {
				setStatusMinimize(false);
				setStatusMaximize(true);
				refModal.current.style.right = '0';
				refModal.current.style.bottom = '0';
				refModal.current.style.top = '0';
				refModal.current.style.left = '0';
				refModal.current.style.zIndex = '2';
			}
		}
	};

	const minimize = () => {
		if (statusMaximize) {
			if (refModal.current) {
				if (refModal.current.style.inset === '0px') {
					refModal.current.removeAttribute('style');
					setStatusMaximize(false);
				}
			}
			setStatusMinimize(true);
		} else {
			if (statusMinimize) {
				setStatusMinimize(false);
			} else {
				restartCloseDrag();
				setStatusMinimize(true);
			}
		}
	};

	const getTitle = (title: string | undefined): string => {
		if (statusMaximize) {
			return title || '';
		}
		if (statusMinimize) {
			return (title || '').substring(0, 9) + '...';
		} else {
			return title || '';
		}
	};

	return (
		<AreaModal
			ref={refModal}
			onMouseOver={() => dragElement()}
			$statusMinimize={statusMinimize}
		>
			<Header ref={refHeader} $statusMinimize={statusMinimize}>
				<span>{getTitle(title)}</span>
				<AreaIcons>
					<Icon onClick={minimize} title="Minimizar">
						<MdOutlineMinimize size={17} color="#FFF" />
					</Icon>
					<Icon onClick={maximize} title="Maximizar">
						{statusMaximize ? (
							<FaRegWindowRestore size={12} color="#FFF" />
						) : (
							<FaRegWindowMaximize size={12} color="#FFF" />
						)}
					</Icon>
					<Icon title="Fechar">
						<AiOutlineCloseSquare size={18} color="#FFF" />
					</Icon>
				</AreaIcons>
			</Header>
			<ContentModal $statusMinimize={statusMinimize}>{children}</ContentModal>
		</AreaModal>
	);
};


// styles:

import { styled } from 'styled-components';

type TypeStatusModal = {
	$statusMinimize?: boolean;
	$statusMaximize?: boolean;
};

export const AreaModal = styled.div<TypeStatusModal>`
	position: ${props => (props.$statusMinimize ? 'relative' : 'absolute')};
	z-index: 1;
	background: #fff;
	text-align: center;
	border-radius: 7px;
	box-shadow: 5px 5px 8px 0px #b4b7b6;
	bottom: ${props => (props.$statusMinimize ? 0 : '')};
	top: 0;
	pointer-events: all;     //-> e o ContainerModal com pointer-events: none 
`;

export const Header = styled.div<TypeStatusModal>`
	height: 35px;
	padding: 0 15px;
	display: flex;
	align-items: center;
	justify-content: ${props => (props.$statusMinimize ? 'left' : 'center')};
	gap: 10px;
	background: #2a4c5e;
	user-select: none;
	border-radius: 5px 5px 0 0;
	color: #fff;
	z-index: 3;
	position: relative;
	cursor: move;

	span {
		font-size: 13px;
		font-family: var(--font-poppins);
		font-weight: 400;
	}
`;

export const AreaIcons = styled.div`
	position: absolute;
	right: 15px;
	top: 7px;
	display: flex;
	gap: 7px;
	cursor: pointer;
`;

export const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 25px;
	max-width: 25px;
	height: 25px;
	transition: 0.3s;

	&:active {
		position: relative;
		top: 1px;
	}

	&:hover {
		background: gray;
	}
`;

export const ContentModal = styled.div<TypeStatusModal>`
	width: ${props => (props.$statusMinimize ? '200px' : 'auto')};
	height: ${props => (props.$statusMinimize ? '0' : 'auto')};
	padding: ${props => (props.$statusMinimize ? '0' : '10px')};
`;

//------------------------------------------------------------------------------------------------------------------------------------------------

//uso:

<ContainerModal>
	<Modal title="Configuração de grupo semafórico">
		<ConfiguracaoGrupo />
	</Modal>
	<Modal title="Configuração de verdes conflitantes">
		<VerdesConflitantes />
	</Modal>
	<Modal title="Configurações de plano">
		<ContentPlano />
	</Modal>
</ContainerModal>