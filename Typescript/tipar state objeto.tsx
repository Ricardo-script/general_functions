import { createContext, PropsWithChildren, useState } from "react";
import { ListTypes, ContextTypes } from "./types";

export const GlobalContext = createContext({} as ContextTypes);

export default function GlobalContextProvider(props: PropsWithChildren) {

    const [lista, setLista] = useState<ListTypes>({ nome: '', idade: 0, profissao: '' });

    return (
        <GlobalContext.Provider value={{
            lista, setLista
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

//---------------------------------------------------------------------------
//types.ts

export type ListTypes = {
    nome: string
    idade: number
    profissao: string
}

export type ContextTypes = {
    lista: ListTypes
    setLista: (newState: ListTypes) => void
}

//---------------------------------------------------------------------------
//App.tsx
import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"

export default function App() {

	const { lista, setLista } = useContext(GlobalContext);

	return (
		<div>
			<p>{lista.nome}</p>
		</div>
	)

}



//outro exemplo:
//------------------------------------------------------------------------------------------------------------------------------
//App.tsx:

import { useState } from "react"
import Copy from "./Copy"

type TypeList = {
	name: string
	idade: number
	profissao: string
}

export default function App() {

	const [lista, setLista] = useState<TypeList>({ name: 'Ricardo', idade: 34, profissao: 'Dev' });

	return (
		<Copy lista={lista}/>
	)
}

// Copy.tsx:----


type TypeList = {
    name: string
    idade: number
    profissao: string
}

interface Props {
    lista: TypeList;
}

export default function Copy({lista}: Props) {
    
    return (
        <div>
            <div>{lista.name}</div>
            <div>{lista.idade}</div>
            <div>{lista.profissao}</div>
        </div>
    );
}
