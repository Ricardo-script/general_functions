// src/styles/theme.ts
//theme.ts:

const theme = {
    colors: {
        background: '#121214',
        text: '#e1e1e6',
        primary: '#8257e6'
    }
}

export default theme

//----------------------------------------------------------------------------------------
//Agora em pages/_app.tsx importar do styled-components o ThemeProvider
//src/pages/_app.tsx:

import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeProvider>
	)
}

//-----------------------------------------------------------------------------------------
/*
	Agora dentro de global.ts ao importar o theme o typescript não reconhece
	body{
        background: ${props => props.theme. ???};
    }
	
	para corrigir isso criar um arquivo de definição dentro da pasta styles: styled.d.ts (não importa o nome do arquivo por padrão o ts procura todos .d.ts)
*/
//styled.d.ts:

import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}

// //--------------------------------------------------------------------------------------------

// com a configuração da tipagem concluida ao voltar em global.ts:
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 400 16px Roboto, sans-serif;
    }
`;