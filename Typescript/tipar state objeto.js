import { createContext, useState, PropsWithChildren } from "react";
import { ContextTypes } from "../types";


export const GlobalContext = createContext({} as ContextTypes);

export default function GlobalContextProvider(props: PropsWithChildren) {
    const [dataInfo, setDataInfo] = useState({
        email: "",
        name: "",
        telephone: "",
    });

    return (
        <GlobalContext.Provider value={{
            dataInfo, setDataInfo
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

//---------------------------------------------------------------------------
//types.ts

export type ContextTypes = {
    dataInfo: TypeInfo;
    setDataInfo: React.Dispatch<React.SetStateAction<TypeInfo>>;
}
export type TypeInfo = {
    email: string
    name: string
    telephone: string
}