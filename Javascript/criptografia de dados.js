import { useState } from "react";
export default function App(){

    const [textCripto, setTextCript] = useState('');

    function Encripta(dados) {
        var mensx = "";
        var l;
        var i;
        var j = 0;
        var chave;
        chave = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";
        //chave = "abcd123";
        for (i = 0; i < dados.length; i++) {
            j++;
            l = (Asc(dados.substring(i, i+1)) + (Asc(chave.substring(j, j+1))));
            if (j === 50) {
                j = 1;
            }
            if (l > 255) {
                l -= 256;
            }
            mensx += (Chr(l));
        }
        console.log(mensx);
        setTextCript(mensx);
    }
    function Descripta(dados) {
        var mensx = "";
        var l;
        var i;
        var j = 0;
        var chave;
        chave = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";
        //chave = "abcd123";
        for (i = 0; i < dados.length; i++) {
            j++;
            l = (Asc(dados.substring(i, i + 1)) - (Asc(chave.substring(j, j+1))));
            if (j === 50) {
                j = 1;
            }
            if (l < 0) {
                l += 256;
            }
            mensx += (Chr(l));
        }
        console.log(mensx);
        setTextCript(mensx);
    }
    function Asc(String) {
        return String.charCodeAt(0);
    }

    function Chr(AsciiNum) {
        return String.fromCharCode(AsciiNum)
    }

    return(
        <div>
            <input type="text" onBlur={(e) => Encripta(e.target.value)}/> {textCripto}<br/>
            <button onClick={() => Descripta(textCripto)}>Descriptografar</button>
        </div>
    );