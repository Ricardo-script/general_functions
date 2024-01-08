//Componente filho Modal:

import { useState, forwardRef, useImperativeHandle } from "react";

export type ModalHandles = {
    openModal: () => void;
}

export const Modal = forwardRef<ModalHandles>((_, ref): JSX.Element | null => {

    const [visibleModal, setVisibleModal] = useState(false);

    const openModal = () => {
        setVisibleModal(true)
    }

    const closeModal = () => {
        setVisibleModal(false)
    }

    useImperativeHandle(ref, () => { // useImperativeHandle expõe a função de retorno para o componente pai através da ref
        return {
            openModal
        }
    })

    if (!visibleModal) { // se for verdade que é falso
        return null
    }

    return (
        <div>
            Modal aberto
            <button onClick={closeModal}>Fechar</button>
        </div>
    );
});

//--------------------------------------------------------------------------------------------------------------------------------------

import { useRef } from "react";
import { Modal, ModalHandles } from "./components/Modal";

function App(): JSX.Element {

    const modalRef = useRef<ModalHandles>(null);

    const handleOpenModal = () => {
        modalRef.current?.openModal()
    }

    return (
        <div>
            <Modal ref={modalRef} />
            <button onClick={handleOpenModal}>Abrir Modal</button>
        </div>
    );
}

export default App
