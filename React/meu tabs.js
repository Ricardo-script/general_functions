import React, { useState } from 'react';
import { Container, AreaMenu, AreaInput, Tabs, AreaFilterDate} from './styles';

export default function Relatorios(){

    const [positionAba, setPositionAba] = useState('80');
    const [local, setLocal] = useState('inactive');
    const [controlador, setControlador] = useState('inactive');
    const [chip, setChip] = useState('inactive');
    const [camera, setCamera] = useState('inactive');

    const Position1 = () => {
        setPositionAba('80');
        setLocal('active');
        setControlador('inactive');
        setChip('inactive');
        setCamera('inactive');
    }
    const Position2 = () => {
        setPositionAba('229');
        setLocal('inactive');
        setControlador('active');
        setChip('inactive');
        setCamera('inactive');
    }
    const Position3 = () => {
        setPositionAba('380');
        setLocal('inactive');
        setControlador('inactive');
        setChip('active');
        setCamera('inactive');
    }
    const Position4 = () => {
        setPositionAba('530');
        setLocal('inactive');
        setControlador('inactive');
        setChip('inactive');
        setCamera('active');
        
    }

    return(
        <Container>
            <AreaMenu>
                <Tabs position={positionAba}>
                    <ul>
                        <li onClick={Position1} id={local}>Geral</li>
                        <li onClick={Position2} id={controlador}>Cadastro</li>
                        <li onClick={Position3} id={chip}>Operação</li>
                        <li onClick={Position4} id={camera}>Alarme</li>
                    </ul>
                </Tabs>
            </AreaMenu>
        </Container>
    );
}


import styled from 'styled-components';

export const Container = styled.section`

`;

export const AreaMenu = styled.section`
    margin-top: 43px;
    display: flex;
    align-items: center;
`;

export const Tabs = styled.ul`

    position: relative;

    ul{
        display: flex;
        &:before {
        content: '';
        width: 151px;
        height: 3px;
        background: #062467;
        position: absolute;
        bottom: -5px;
        left: ${props => props.position + 'px'};
        transition: .3s ease-out;
        }
    }
    
    li{
        list-style: none;
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        color: #001E62;
        height: 23px;
        font-size: 14px;
        user-select: none;

        &#inactive{
            font-weight: normal;
        }

        &#active{
            font-weight: 550 !important;
            transition: .3s ease-out;
        }
    }
`;
