import { useRef } from "react";

export default function App() {

    const mydiv = {
        position: 'absolute',
        zIndex: '9',
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
        border: '1px solid #d3d3d3',
    }

    const mydivheader = {
        padding: '10px',
        cursor: 'move',
        zIndex: '10',
        background: '#2196F3',
        color: '#fff',
    }

    const refModal = useRef();
    const refHeader = useRef();


    function dragElement() {

        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (refHeader.current) {
            // se presente, o cabeçalho é de onde você move o DIV:
            refHeader.current.onmousedown = dragMouseDown;
        } else {
            // caso contrário, mova o DIV de qualquer lugar dentro do DIV:
            refModal.current.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // pega a posição do cursor do mouse na inicialização:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // chama uma função sempre que o cursor se mover:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calcule a nova posição do cursor:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // defina a nova posição do elemento:
            refModal.current.style.top = (refModal.current.offsetTop - pos2) + "px";
            refModal.current.style.left = (refModal.current.offsetLeft - pos1) + "px";

            //limita o modal até o topo para não sair da pagina:
            //refModal.current.style.top = (refModal.current.offsetTop - pos2) < 0 ? 0 : (refModal.current.offsetTop - pos2) + "px";
            //refModal.current.style.left = (refModal.current.offsetLeft - pos1) < 0 ? 0 : (refModal.current.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // pare de se mover quando o botão do mouse for liberado:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    return (
        <div ref={refModal} onMouseOver={() => dragElement()} style={mydiv}>
            <div ref={refHeader} style={mydivheader}>Click here to move</div>
            <p>Move</p>
            <p>this</p>
            <p>DIV</p>
        </div>

    )
}

