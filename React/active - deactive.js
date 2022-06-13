import React, { useState } from "react";
import "./styles.css";
// styles.css
export default function App() {
  const values = [
    { id: 1, text: "LI-1" },
    { id: 2, text: "LI-2" },
    { id: 3, text: "LI-3" },
    { id: 4, text: "LI-4" }
  ];
  const [activeId, setActiveId] = useState();

  return (
    <div className="App">
      <ul>
        {values.map((val) => (
          <li onClick={() => setActiveId(val.id)}>
            {val.text} -- {activeId === val.id ? "Active" : "Inactive"}
          </li>
        ))}
      </ul>
    </div>
  );
}

//exemplo com icones: 

import React, { useState } from 'react';
import { Container, Title, Menu } from './styles';
import { GiCoffeeCup } from "react-icons/gi";
import { FaCoins } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";

export default function NavBar() {
    const values = [
        { id: 1, text: "Inicio" },
        { id: 2, text: "Pdv" },
        { id: 3, text: "Produtos" },
        { id: 4, text: "Relatorios" }
    ];
    const [activeId, setActiveId] = useState();

    const icons = [
        GiCoffeeCup,
        FaCoins,
        FaBoxOpen,
        RiFileExcel2Fill,
        FaPowerOff
    ];
    
    return (
        <Container>
        <Title>Menu</Title>
        <Menu>
            <hr/>
        <ul>
            {values.map((val,idx) =>{
                const Icon = icons[idx];
                return(
                <li key={val.id} onClick={() => setActiveId(val.id)} className={activeId === val.id ? "active" : "inactive"}>
                    <Icon/>
                    {val.text}
                </li>
                );
            })}
        </ul>
        </Menu>
    </Container>  
    );
}


import styled from 'styled-components';

export const Container = styled.nav`
    width: 270px;
    height: 84vh;
    background:#222222;
`;

export const Title = styled.h4`
    color: #28774F;
    text-align: center;
    margin-top: 20px;
`;

export const Menu = styled.div`
    hr{
        border: 0;
	    border-top: 2px solid #534f4f;
        width: 80%;
        margin: 15px auto;
    }

    ul{
        width: 100%;
        margin: 0 auto;
        list-style: none;

        li{
            color: #534f4f;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 500;
            height: 50px;
            display: flex;
            align-items: center;
            cursor: pointer;
            padding-left: 27px;
            gap: 10px;
            user-select: none;

            &:hover{
                background:#534f4f;
                color: #c3bebe;
            }

            &.active{
                background:#534f4f;
                color: #c3bebe;  
            }

            &.inactive{
                background: #222222;
            }
        }
    }
`;


