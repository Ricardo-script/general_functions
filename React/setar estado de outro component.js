// Função que recebe o componente

import React, { useState } from "react";
import ModalRecover from './ModalRecover';

const [useModal, setUseModal] = useState('none');
const [useSlide, setUseSlide] = useState('-830px');

export default function App(){
	return(
		<div>
		
			<ModalRecover status={useModal} setStatus={setUseModal} slide={useSlide} setSlide={setUseSlide}/>
		
		</div>
		
	);
}

//----------------------------------------------------------------------------------------------------------------------

//função em que se cria o componente, aqui setamos o state que está no componente anterior
//dentro de setSlide (props criada no outro componente) aqui pode inserir qualquer valor dentro de () para setar o outro componente

import React, { useState, useEffect} from 'react';
import { Overlay, Modal, AreaLogo, Form, Footer} from './styles';
import logoLogin from '../../../assets/logoLogin.png';

export default function ModalRecover({status, setStatus, slide, setSlide}){

    return(
        <>
        <Overlay status={status} onClick={() => {setStatus('none'); setSlide('-830px')}}></Overlay>
            <Modal status={status} slide={slide} setSlide={setSlide}>
                <AreaLogo>
                    <div className='logoPhor'>
                        <img src={logoLogin} alt="" />
                    </div>
                </AreaLogo>
                <Form>
                    <div className='content'>
                        <input type="email" placeholder="Digite o email cadastrado..."/>
                        <button>Recuperar senha</button>
                    </div>
                </Form>
                <Footer>
                    <h6>
                        Uma mensagem será enviada para o endereço de email preenchido acima,
                        com instruções para ser feita a recuperação de sua senha.
                    </h6>
                </Footer>
            </Modal>
        </>
        
    );
}