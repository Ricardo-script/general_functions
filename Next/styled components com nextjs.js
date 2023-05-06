/* 
	yarn add styled-components
	yarn add @types/styled-components
*/
//**********************************************************************************************************************
//versão do next 13 com a pasta App
//**********************************************************************************************************************

//Crie o arquivo src/lib/registry:

'use client';
import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {

    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        //@ts-ignore
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') return <>{children}</>;

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children}
        </StyleSheetManager>
    );
}

//-------------------------------------------------------------------------------------------------------------------
//No arquivo layout dentro da pasta app:
//Envolva o children com RootLayout com o componente de registro(registry) de estilo:

'use client'
import StyledComponentsRegistry from '../lib/registry';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='pt-br'>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}

//-----------------------------------------------------------------------------------------------------------------------
//styled-components ficará assim:

'use client'
import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid red;
    background: #b1acac;
`;

//------------------------------------------------------------------------------------------------------------------------






//*******************************************************************************************************************
//versão antiga sem a pasta app:
//*******************************************************************************************************************

// src/pages/_document.tsx
// _document.tsx:

import { Html, Head, Main, NextScript } from 'next/document'
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: [initialProps.styles, sheet.getStyleElement()],
			}
		} finally {
			sheet.seal()
		}
	}

	render(): JSX.Element {
		return (
			<Html lang="pt-br">
				<Head>
					<meta charSet='utf-8' />
					<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap"
						rel="stylesheet" />
						
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Como importar os styles de maneira correta:
Dentro de pages, todo aquivo  .js .jsx .ts .tsx ao buildar o next ira entender que se trata de uma pagina
para usar de maneira correta criar o styles dentro da pasta styles, um exemplo é criar uma pasta chamada pages
e cada arquivo de styles dentro dela como no exemplo a seguir:
*/

//src/pages/Home.tsx:

import { Container } from "@/styles/pages/Home"; // dentro da pasta styles

export default function Home() {
    return (
        <Container>
            <h1>Página inicial Home</h1>
            <span>teste 123</span>
        </Container>
    );
}

//src/styles/pages/Home.ts:
import styled from "styled-components";

export const Container = styled.section`
    background: #382a44;
    color: #FFF;
    width: 100%;
    height: 500px;

    span{
        color: orange;
    }
`;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
	Obs: Para verificar se realmente o server side rendering do nextjs esta funcionando para
	o styled-components basta abrir o inspecionar em configurações, debugger e desativar o javascript
	
	Com styled-componenets não ira funcionar um Head title global, para isso deve-se importar import Head from "next/head"
	para a pagina que se queira nomear o title, por exempro no arquivo MainHome.tsx:
	
	import Link from "next/link";
import Head from "next/head";

export default function MainHome() {
	return (
		<div>
			<Head>
				<title>HomePage</title>
			</Head>
			<h1>Main Home</h1>
			<Link href='/Home'>Home</Link>
		</div>
	);
}

*/





