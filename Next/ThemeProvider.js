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

//---------------------------------------------------------------------------------------

Crie um arquivo chamado 'NextThemeProvider.tsx', pois podera user o use client

'use client';
import theme from './theme';
import { ThemeProvider } from 'styled-components';

const NextThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default NextThemeProvider;

//----------------------------------------------------------------------------------------
//Agora em src/app/layout.tsx:
//src/pages/_app.tsx:

import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';
import NextThemeProvider from '@/styles/NextThemeProvider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Carga PRO',
	description: 'Gestão de Cargas',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element {
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<NextThemeProvider>
						<GlobalStyles />
						{children}
					</NextThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
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