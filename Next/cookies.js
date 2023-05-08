// cookie do next:

import { cookies, headers } from 'next/headers';

export default function Home(): JSX.Element {
	const userCookies = cookies();
	const userHeaders = headers();

	return (
		<div>
			<h1>Home</h1>
			{JSON.stringify(userCookies.get('auth'), null, 2)}
			{JSON.stringify(userHeaders.entries(), null, 2)}
		</div>
	);
}









//---------------------------------------------------------------------------------------------------------------------------------
//Cookies nativo do javascript
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

export const getCookie = (cookieName: string) => {
	const name = `${cookieName}=`;
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookieArray = decodedCookie.split(';');

	for (let i = 0; i < cookieArray.length; i++) {
		let cookie = cookieArray[i];
		while (cookie.charAt(0) === ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) === 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return '';
};
/*
	const myCookieValue = getCookie('nomeDoCookie')
	console.log(myCookieValue)
*/

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
