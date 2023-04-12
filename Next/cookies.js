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
