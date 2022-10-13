export default function App() {

    const mediaQuery = window.innerWidth;
    const whatsAppDesktop = 'https://web.whatsapp.com/send?text=';
    const whatsAppMobile = 'https://api.whatsapp.com/send?text=';
    const texto = `
        *texto negrito* _texto em italico_
        pula uma linha 
        *Começa nova linha* 
        _novo conteudo_
    `;

    function open() {

        if(mediaQuery > 900){
            //desktop
            let uriWA = whatsAppDesktop.concat(encodeURIComponent(texto));
            window.open(uriWA, "_blank");
            return false;
        }else{
            //mobile
            let uriWA = whatsAppMobile.concat(encodeURIComponent(texto));
            window.open(uriWA, "_blank");
            return false;
        }
    }

    return (
        <div>
            <button onClick={open}>Abrir</button>
        </div>
    );
}
