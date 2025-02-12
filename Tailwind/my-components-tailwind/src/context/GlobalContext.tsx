"use client";

import { GlobalContextTypes } from "@/types/GlobalContextTypes";
import { createContext, PropsWithChildren, useState } from "react";

export const GlobalContext = createContext({} as GlobalContextTypes);

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
    const [toggleSideBar, setToggleSideBar] = useState(true);

    return (
        <GlobalContext.Provider
            value={{
                toggleSideBar,
                setToggleSideBar,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
