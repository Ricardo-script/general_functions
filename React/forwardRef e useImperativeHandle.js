//Exemplo de uso de forwardRef e useImperativeHandle com um modal

//App.jsx

import { useCallback, useRef } from "react";
import Modal from "./Modal";

export default function App() {

	//para ter acesso as funcionalidades do componente filho, usar as refs:
	const modalRef = useRef(null);

	const handleOpenModal = useCallback(() => {
		modalRef.current.openModal();
	}, []);

	return (
		<div>
			<button onClick={handleOpenModal}>Abrir Modal</button>
			<Modal ref={modalRef} />
		</div>
	);
}

//------------------------------------------------------------------------------------------------

//Modal.jsx

import { useCallback, useState, forwardRef, useImperativeHandle } from "react";
import { Container, Header, Content, AreaButtons } from './styles';

/**
 * Para enviar a função handleOpenModal para o componente App
 * Um componente filho pode chamar a funcionalidade do componente pai, mas da para acessar funcionalidade usando as refs, forwardRef e useImperativeHandle
 * que esteja em um componente filho para o componente pai
 * 
 * ref: são as referencias
 * forwardRef: técnica para passar a ref de um componente pai para um filho
 * useImperativeHandle: envia as funções do componente filho para o pai
 */

const Modal = forwardRef((props, ref) => { //forwardRef recebe exatamente dois parâmetros: props e ref.
    const [visible, setVisible] = useState(true);

    const openModal = useCallback(() => {
        setVisible(true);
    }, []);

    const closeModal = useCallback(() => {
        setVisible(false);
    }, []);

    useImperativeHandle(ref, () => {
        return {
            openModal // -> sem o uso de "()"
        }
    }) // 1º paramentro que recebe é a ref, e o 2º é uma função que devolve quais métodos eu quero expor ao componente pai


    if (!visible) {
        return null;
    } else {
        return (
            <Container status={visible}>
                <Header>Titulo</Header>
                <Content>
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet maiores quos exercitationem earum eum ipsum?
                    </div>
                    <AreaButtons>
                        <button>Ok</button>
                        <button onClick={closeModal}>Fechar</button>
                    </AreaButtons>
                </Content>
            </Container>
        );
    }
})

export default Modal;

//-----------------------------------------------------------------------------------------------------------------------------------------------

//styles.jsx

import styled, { keyframes } from "styled-components";

const openModal = keyframes`
    0%{
        width: 0;
        height: 0;
    }
    100%{
        width: 400px;
        height: 250px;
    }
`;

const closeModal = keyframes`
    0%{
        width: 400px;
        height: 250px;
    }
    100%{
        width: 0;
        height: 0;
    }
`;

export const Container = styled.div`
    position: absolute;
    top: -20%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    box-shadow: 5px 5px 3px -3px #ADADAD;
    z-index: 1;
    border-radius: 0 0 9px 9px;
    animation: ${props => props.showffect === false ? closeModal : openModal} 0.3s ease-in-out both;
    background: #bdc0c2;
`;

export const Header = styled.div`
    width: 100%;
    height: 30px;
    background: #4380b9;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

export const Content = styled.div`
    width: 70%;
`;

export const AreaButtons = styled.div`
    position: absolute;
    bottom: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    button{
        border: 0;
        width: 150px;
        height: 25px;
        cursor: pointer;

        &:active{
            position: relative;
            top: 1px;
        }

        &:hover{
            background: #274077;
            color: #FFF;
            transition: .3s;
        }

    }
`;