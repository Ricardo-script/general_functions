export type RootStackParamList = {
    Drawer: undefined;
    Details: { name: string } | undefined;
	Notification: undefined
};

//src/routes/ReactNavigation.tsx-------------------------------------------------------------------------------------------------------------------------------------------
//declare global é uma forma de declarar um escopo global para adicionar tipos personalizados em um módulo TypeScript
//RootParamList terá todos os tipos definidos em RootStackParamList, além de qualquer tipo adicional que você possa adicionar posteriormente.

import { RootStackParamList } from './Router';
declare global { 
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }  
    }
}