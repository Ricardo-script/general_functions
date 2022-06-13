import React, {useEffect} from 'react';
import { Modal, Header } from './styles';

export default function App(){

    useEffect(() => {
        dragElement(document.getElementById("mydiv"));
    },[]);
   
    function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    } 

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    return(
        <Modal id="mydiv">
            <Header id="mydivheader">Click here to move</Header>
            <p>Inserir</p>
            <p>props.</p>
            <p>children</p>
        </Modal>
    );
}


//styles---------------------------------------------------------------------

import styled from "styled-components";

export const Modal = styled.div`
    position: absolute;
    z-index: 9;
    background-color: #f1f1f1;
    text-align: center;
    border: 1px solid #d3d3d3;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;

export const Header = styled.div`
    padding: 10px;
    cursor: move;
    z-index: 10;
    background-color: #2196F3;
    color: #fff;
`;

