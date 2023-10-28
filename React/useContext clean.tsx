import { useState, createContext, PropsWithChildren, useContext } from 'react';
import { DataChatTypes } from '../../../mocks/chat';

type GlobalStateTypes = {
    dataChat: DataChatTypes[]
    setDataChat: (newState: DataChatTypes[]) => void
}

const GlobalState = createContext({} as GlobalStateTypes)

const GlobalStateProvider = ({ children }: PropsWithChildren) => {

    const [dataChat, setDataChat] = useState<DataChatTypes[]>([]);

    return (
        <GlobalState.Provider value={{
            dataChat, setDataChat
        }}>
            {children}
        </GlobalState.Provider>
    );
}

export const useGlobalState = () => {
    const value = useContext(GlobalState);
    if(value !== null){
        throw new Error("Error in GlobalState");
    }

    return value;
}

export { GlobalStateProvider }


// uso: const { dataChat } = useGlobalState();