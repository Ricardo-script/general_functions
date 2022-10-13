export default function App() {

    function open() {
        //var tekst = 'texto a ser enviado';
        var tekst = '*texto negrito* _texto em italico_ '
        var uriWA = "https://web.whatsapp.com/send?text=".concat(
            encodeURIComponent(tekst)
        );
        window.open(uriWA, "_blank");
        return false;
    }

    return (
        <div>
            <button onClick={open}>Abrir</button>
        </div>
    );
}

/* -----------------------------------------------------------------------------------*/
whatsapp mobile


function sendWA() {
    var tekst = document.getElementById("txtVoorbeeldtekst").value;
    var uriWA = "https://api.whatsapp.com/send?text=".concat(
        encodeURIComponent(tekst)
    );
    window.open(uriWA, "_blank");
    return false;
}*/


// caracteres especiais:

//%0A pula linha