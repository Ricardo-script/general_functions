/*
Um hook personalizado que fornece o status do seu aplicativo que é o seu aplicativo está visível ou não?

Por exemplo, se o usuário minimizar o aplicativo ou alterar a guia para outra página da Web, isso dará falsos significados de que o usuário não 
está exibindo seu aplicativo no momento e, quando o usuário abrir seu aplicativo, ele dará verdadeiro.

Isso é muito útil em muitos casos, alguns dos exemplos podem ser:

1 - Se você precisar enviar alguns dados analíticos para back-end para que o bom momento possa ser quando o usuário estiver ausente.

2 - Um site tem um carrossel de imagens que não deve avançar para o próximo slide, a menos que o usuário esteja visualizando a página

3 - Um aplicativo que mostra um painel de informações não deseja sondar o servidor em busca de atualizações quando a página não estiver visível.


A Document.visibilityState propriedade somente leitura retorna a visibilidade do document, ou seja, em qual contexto esse elemento agora está visível. 
É útil saber se o documento está em segundo plano ou em uma guia invisível, ou carregado apenas para pré-renderização.
Os valores possíveis são: visible, hidden
*/

import { useState, useEffect } from 'react';

export const useDocVisible = () => {

    const [visible, setVisible] = useState(document.visibilityState === 'visible');

    useEffect(() => {

        const change = () => setVisible(document.visibilityState === 'visible');

        document.addEventListener('visibilitychange', change);

        return () => document.removeEventListener('visibilitychange', change);

    }, []);


    return { visible };
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
// uso
import { useEffect } from "react";
import { useDocVisible } from "./hooks/useDocVisible";

export default function App() {

    const { visible } = useDocVisible();

    useEffect(() => {
        console.log(visible);
    }, [visible]);

    return (
        <div>123</div>
    );
}