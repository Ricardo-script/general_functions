//ex:

<Overlay></Overlay>
	<Modal>
		Conteúdo Modal
	</Modal>
	
//styles:

export const Overlay = styled.div`
    //display: none;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000b8;
    cursor: pointer;
`;

export const Modal = styled.div`
    width: 980px;
    height: 560px;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 4px;
`;