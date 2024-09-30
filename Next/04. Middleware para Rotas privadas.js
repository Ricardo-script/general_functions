/* Como funciona?
	O Next.js é um framework de React que segue uma estrutura clara de convenções. Quando você cria um middleware 
	como esse e o exporta como padrão de um arquivo dentro de uma pasta chamada api (ou seja, no diretório pages/api), 
	o Next.js o reconhece como um endpoint da API.
	O que acontece é:

	Padrão de Nomenclatura: O Next.js segue uma convenção de nomenclatura onde qualquer arquivo dentro de pages/api 
	é tratado como um endpoint da API.

	Execução do Middleware: Quando uma requisição é feita a uma URL correspondente a este middleware, o Next.js o executa
	automaticamente antes de qualquer outra manipulação de rota.

	Estrutura de Execução: No caso do seu código, ele age como um middleware que verifica se há um token de autenticação 
	nos cookies e faz redirecionamentos com base nisso, além de definir um padrão de rota para a configuração específica.

	Configuração: A configuração no final do arquivo (export const config = {...}) define um padrão de rota (matcher) 
	que especifica quais URLs devem ser tratadas por este middleware.

*/

// instalar pacotes de cookies

yarn add js-cookie
yarn add @types/js-cookie

//-----------------------------------------------------------------------------

//src/app/page.tsx

'use client'

import Cookie from "js-cookie"
import { useRouter } from "next/navigation"

export default function Home() {

    const router = useRouter();

    const handleLogin = () => { // cria um JWT ficticio
        Cookie.set('auth_token', 'asdfghjyrwqweqsadafgtereteerfeety')
        router.push('/dashboard')
    }    

    return (
        <section>
            <button onClick={handleLogin}>Login</button>
        </section>
    )
}

//----------------------------------------------------------------------------------------------------------

//src/app/Dashboard/page.tsx

'use client'

import Cookie from "js-cookie"
import { useRouter } from "next/navigation"

export default function Dashboard() {

    const router = useRouter();

    const handleLogout = () => {
        Cookie.remove('auth_token');
        router.push('/');
    }

    return (
        <section>
            <button onClick={handleLogout} style={{ background: '#963a3a' }}>Logout Sair</button>
        </section>
    )
}

//---------------------------------------------------------------------------------------------------------

//src/middleware.ts

// Antes de renderizar as rota configuradas ele vai passar por essa função

import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value

    const signInURL = new URL('/', request.url);
    const dashBoardURL = new URL('/Dashboard', request.url) // DashBoard nesse caso seria a tela principal de entrada

    if (!token) { //qnd não tem token redireciona para login
        if (request.nextUrl.pathname === '/') { // se eu for para a tela de tela de login
            return NextResponse.next(); // apenas prossegue
        }
        return NextResponse.redirect(signInURL) // aqui não pode ser somente '/' deve ser criar um objeto url do proprio javascript (new URL)
    }

    if (request.nextUrl.pathname === '/') { // se tiver token ( ou seja ñ caiu no 1º if) e // se eu for para a tela de tela de login
        return NextResponse.redirect(dashBoardURL)
    }
}

export const config = {
    matcher: ['/', '/Dashboard/:path*', '/Register/:path*'] //nesse array ira conter todas as rotas que a função middleware execute antes de ser chamada
    // ( /:path* ) barra dois pontos path quer dizer que todas as rotas que vierem depois vão ter essa validação
	
	
	
	/* 
		ou:
		export const config = {
			matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',]
		}
	*/
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
/*
	A matcher configuração permite regex completo, portanto, há suporte para correspondências como lookaheads negativos ou correspondência de caracteres. 
	Um exemplo de lookahead negativo para corresponder a todos, exceto caminhos específicos, pode ser visto aqui:
*/


export const config = {
  matcher: [
    /*
     * Combine todos os caminhos de solicitação, exceto aqueles que começam com:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

// uso:

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',]
}

// exemplo aplicado ---------------------------------------------------------------------------------------------:

import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest): NextResponse | undefined {
	const token = request.cookies.get('token')?.value;

	const signInURL = new URL('/login', request.url); // Página de login
	const selecaoURL = new URL('/selecao', request.url); // Página principal após o login

	const publicRoutes = [
		'/',
		'/site',
		'/login',
		'/contato',
		'/mensagem-enviada',
		'/politica-privacidade',
		'/termos-uso',
	]; // Definindo rotas públicas

	if (!token) {
		// Se não houver token e a rota atual não estiver nas rotas públicas
		if (!publicRoutes.includes(request.nextUrl.pathname)) {
			return NextResponse.redirect(signInURL);
		}
	} else {
		// Se houver token e o usuário tentar acessar a rota de login
		if (request.nextUrl.pathname === '/') {
			return NextResponse.redirect(selecaoURL);
		}
	}

	return NextResponse.next(); // Prosseguir normalmente
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|static|public).*)', // Protege todas as rotas, exceto 'api', '_next', 'static', 'public', e outras exceções
	],
};
