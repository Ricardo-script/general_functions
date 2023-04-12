// Definindo as rotas que são privadas e publicas:

// src/constants/app-routes.ts:
export const APP_ROUTES = {
    private: {
        empresa: {
            name: '/empresa'
        },
        unauthorized: {
            name: '/unauthorized'
        }
    },

    public: {
        login: '/',
        forget_password: '/forget-password'
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------

// Função para verificar se a rota é publica:
// src/functions/checkIsPublicRoute.ts

import { APP_ROUTES } from "@/constants/app-routes";

/**
 * 
 * @param asPath string
 * @returns boolean
 */

export const checkIsPublicRoute = (asPath: string) => {  // asPath é o endereço da rota, ex: '/empresa'
    const appPublicRoutes = Object.values(APP_ROUTES.public);
    return appPublicRoutes.includes(asPath);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------


// Verificando se o usuário esta autenticado com o JWT salvo em cookies

//src/functions checkUserAuthenticated.ts

import { checkCookieExists } from "@/services/utils";

/**
 * 
 * @returns true ou false
 */

export const checkUserAuthenticated = () => {
    const userToken = checkCookieExists('token'); //process.env.NEXT_PUBLIC_USER_TOKEN

    return !!userToken   //se conter o JWT em cookie então retorna true
}


//-----------------------------------------------------------------------------------------------------------------------------------------------

// Componente com logica para verificar se a rota é privada:

//src/components/PrivateRoute.tsx

import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { APP_ROUTES } from '@/constants/app-routes'
import { checkUserAuthenticated } from '@/functions/checkUserAuthenticated'


type PrivateRouteProps = {
    children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const router = useRouter();

    const isUserAuthenticated = checkUserAuthenticated(); // verifica se o usuário esta autenticado checando os cookies

    useEffect(() => {
        if (!isUserAuthenticated) {
            router.push(APP_ROUTES.public.login);
        }
    }, [isUserAuthenticated, router]);

    return (
        <>
            {!isUserAuthenticated && null} {/*se não estiver autenticado retorna nulo */} // obs importante nao usar operador ternario, pois por poucos segundo a tela pisca mostrando a tela privada
            {isUserAuthenticated && children}
        </>
    );
}

export default PrivateRoute



//-----------------------------------------------------------------------------------------------------------------------------------------------

//src/pages/_app.tsx:

import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import GlobalSideBarProvider from '@/context/GlobalSideBarProvider';

import { useRouter } from 'next/router'
import { checkIsPublicRoute } from '@/functions/checkIsPublicRoute';
import PrivateRoute from '@/components/PrivateRoute';

export default function App({ Component, pageProps }: AppProps) {

    const router = useRouter();
    const { pathname } = router;

    const isPublicPage = checkIsPublicRoute(pathname!); // '!' as vezes pode ser undefined por não esta sendo usado 'use client'

    console.log('isPublicPage', isPublicPage) //isPublicPage - retorna true para publica e false para privada

    return (
        <GlobalSideBarProvider>

            {isPublicPage && <Component {...pageProps} />}

            {!isPublicPage && <PrivateRoute><Component {...pageProps} /></PrivateRoute>}

            <GlobalStyles />
        </GlobalSideBarProvider>
    );
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------
// gerenciamento dos cookies:

//src/services/utils.ts

/**
 * @param {sring} cookieName
 * @param {string} cookieValue //token
 * @param {string} hourToExpire
 */
export const createCookie = (cookieName: string, cookieValue: string, hourToExpire: number) => {
    const date = new Date()
    date.setTime(date.getTime() + hourToExpire * 60 * 60 * 1000)
    document.cookie = `${cookieName} = ${cookieValue}; expires = ${date.toUTCString()}`
}

export const deleteCookie = (name: string) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

export const checkCookieExists = (cookieName: string) => {
    if (typeof window !== "undefined") {

        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            // verifica se o nome do cookie é igual ao nome fornecido
            if (cookie.startsWith(`${cookieName}=`)) {
                // se o nome do cookie for encontrado, significa que ele existe
                return true;
            }
        }
        // se o nome do cookie não for encontrado, significa que ele não existe
        return false;

    } else {
        return null // caso não seja typeof window undefined
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------

// criando cookies JWT no login:

// src/pages/login.tsx

import { createCookie } from '../utils'

export default function Login() {
    const router = useRouter();
	
	// ...
	
	const handleSubmit = async () => {
        setState({ ...state, isSubmitting: true })

        const { email, password } = state
        try {
            const res = await fetch(`${apiNextURl}/login`, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => res.json())

            const { token, success, msg, user } = res

            if (!success) {
                return setState({
                    ...state,
                    message: msg,
                    isSubmitting: false,
                })
            }
            // expire in 30 minutes(same time as the cookie is invalidated on the backend)
            (window as any).token = token
            createCookie('token', token, 0.5)

            router.push({ pathname: '/session' })
        } catch (e: any) {
            setState({ ...state, message: e.toString(), isSubmitting: false })
        }
    }
