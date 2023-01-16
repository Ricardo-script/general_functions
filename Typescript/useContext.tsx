import React, { createContext, useState } from "react";

export type ContextTypes = {
    openMenu?: boolean;
    setOpenMenu: (newState: boolean) => void;
    openCadastros?: boolean;
    setOpenCadastros: (newState: boolean) => void;
    openUsuario?: boolean;
    setOpenUsuario: (newState: boolean) => void;
}

export const GlobalState = createContext({} as ContextTypes); // {} as ContextProps ou as any é o modo para mascarar o objeto se ele estiver vazio

export default function GlobalStateProvider(props: React.PropsWithChildren) {

    const [openMenu, setOpenMenu] = useState(true);
    const [openCadastros, setOpenCadastros] = useState(false);
    const [openUsuario, setOpenUsuario] = useState(false);


    return (
        <GlobalState.Provider value={{
            openMenu, setOpenMenu,
            openCadastros, setOpenCadastros,
            openUsuario, setOpenUsuario
        }}>
            {props.children}
        </GlobalState.Provider>
    );
}

//---------------------------------------------------------------------------------------------
//routes.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStateProvider from "store";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Departamento from "pages/Departamento";

const MainNavigation = () => {
    return (
        <GlobalStateProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Departamento' element={<Departamento />} />
                </Routes>
            </BrowserRouter>
        </GlobalStateProvider>
    );
}

export default MainNavigation;

//-------------------------------------------------------------------------------------------------

//nos componentes:
import { useContext } from "react";
import { GlobalState } from "store";

export default function SideBar() {
	
	const { openMenu, setOpenMenu } = useContext(GlobalState);
    const { openCadastros, setOpenCadastros } = useContext(GlobalState);
    const { openUsuario, setOpenUsuario } = useContext(GlobalState);
	
	return(
		//...
	)
}






