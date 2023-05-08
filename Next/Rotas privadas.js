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

export const checkIsPublicRoute = (asPath: string): boolean => {  // asPath é o endereço da rota, ex: '/empresa'
    const appPublicRoutes = Object.values(APP_ROUTES.public);
    return appPublicRoutes.includes(asPath);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

// Componente com logica para verificar se a rota é privada:

//src/components/PrivateRoute.tsx

import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { APP_ROUTES } from '@/constants/app-routes';

import { useState } from 'react';

type PrivateRouteProps = {
	children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
	const router = useRouter();
	const [cookieExists, setCookieExists] = useState(false);

	useEffect(() => {
		// uso de useEffect para evitar dar erro de hidratação
		const isUserAuthenticated = document.cookie.indexOf('token=') !== -1; // 'token' -> é o nome do cookie

		if (isUserAuthenticated) {
			setCookieExists(true);
		} else {
			router.push(APP_ROUTES.public.login);
		}
	}, [router]);

	return (
		<>
			{!cookieExists && null}
			{/*se não estiver autenticado retorna nulo */}
			{cookieExists && children}
		</>
	);
};

export default PrivateRoute;

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
