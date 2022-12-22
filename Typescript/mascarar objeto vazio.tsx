import { createContext } from 'react';

interface IdUsuario {
	nomeUsuario: string
}

const GlobalContext = createContext<IdUsuario>({} as IdUsuario); // {} as IdUsuario para mascarar o objeto vazios