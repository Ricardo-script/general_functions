//.ENV
//VITE_SECRET = 'shooting@123'

export function encrypt(message: string): string | undefined {
    let encryptedMessage = "";
    let j = 0;
    //const chave = "abcd123"; // Sua chave
    const chave = import.meta.env.VITE_SECRET

    for (let i = 0; i < message.length; i++) {
        j++;
        const charCodeMessage = Asc(message.substring(i, i + 1));
        const charCodeKey = Asc(chave.substring(j % chave.length, (j % chave.length) + 1));

        let encryptedCharCode = charCodeMessage + charCodeKey;

        if (encryptedCharCode > 255) {
            encryptedCharCode -= 256;
        }

        encryptedMessage += Chr(encryptedCharCode);
    }

    return encryptedMessage;
}

export function decrypt(encryptedMessage: string): string | undefined {
    let decryptedMessage = "";
    let j = 0;
    //const chave = "abcd123"; // Sua chave
    const chave = import.meta.env.VITE_SECRET

    for (let i = 0; i < encryptedMessage.length; i++) {
        j++;
        const charCodeMessage = Asc(encryptedMessage.substring(i, i + 1));
        const charCodeKey = Asc(chave.substring(j % chave.length, (j % chave.length) + 1));

        let decryptedCharCode = charCodeMessage - charCodeKey;

        if (decryptedCharCode < 0) {
            decryptedCharCode += 256;
        }

        decryptedMessage += Chr(decryptedCharCode);
    }

    return decryptedMessage;
}

function Asc(str: string): number {
    return str.charCodeAt(0);
}

function Chr(asciiNum: number): string {
    return String.fromCharCode(asciiNum);
}


