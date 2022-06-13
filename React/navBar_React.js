import React, { useState, useContext } from 'react';
import { Container, Title, Menu } from './styles';
import { GiCoffeeCup } from "react-icons/gi";
import { FaCoins } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { IoIosListBox } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../contextModal';


export default function NavBar() {
    
    const history = useHistory();
    const {setStatusLogin} = useContext(GlobalContext); 
    const values = [
        { id: 1, menu: "Inicio" },
        { id: 2, menu: "Pdv" },
        { id: 3, menu: "Cadastro" },
        { id: 4, menu: "Nova Unidade" },
        { id: 5, menu: "Produtos" },
        { id: 6, menu: "Lista de Unidades" },
        { id: 7, menu: "Relatorios" },
        { id: 8, menu: "Sair" }
        
    ];
    const [activeId, setActiveId] = useState('');

    const icons = [
        GiCoffeeCup,
        FaCoins,
        FaCashRegister,
        FaWeight,
        FaBoxOpen,
        IoIosListBox,
        RiFileExcel2Fill,
        FaPowerOff
        
    ];

    const goto = (menu) => {
        if( menu === 'Inicio'){
            history.push('/inicio');
        }
        if( menu === 'Pdv'){
            history.push('/pdv');
        }
        if( menu === 'Cadastro'){
            history.push('/cadastro');
        }
        if( menu === 'Nova Unidade'){
            history.push('/unidade');
        }
        if( menu === 'Produtos'){
            history.push('/produtos');
        }
        if( menu === 'Relatorios'){
            //history.push('/');
        }
        if( menu === 'Lista de Unidades'){
            history.push('/unidadeMedida');
        }
        if( menu === 'Sair'){
            setStatusLogin('Entrar');
            history.push('/');
        }
    }
    
    return (
        <Container>
        <Title>Menu</Title>
        <Menu>
            <hr/>
            <ul>
                {values.map((val,idx) =>{
                    const Icon = icons[idx];
                    return(
                    <li key={val.id} onClick={() => {setActiveId(val.menu); goto(val.menu)}} className={activeId === val.menu ? "active" : "inactive"}>
                        <Icon size={25}/>
                        {val.menu}
                    </li>
                    );
                })}
            </ul>
        </Menu>
    </Container>  
    );
}