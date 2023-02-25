// criar uma pasta dentro de src: styles e criar um arquivo chamado global.ts
// src/styles/global.ts

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #121214;
        color: #e1e1e6;
    }
`;

//---------------------------------------------------------------------------------------
// importar o style global em _app.tsx:

import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<GlobalStyle />
		</>
	)
}
