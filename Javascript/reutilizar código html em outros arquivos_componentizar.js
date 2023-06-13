const componentFooterHTML = `
    <div class="containerFooter">
        <div class="row">
            <div class="col">
                <h3>Serviços</h3>
                <ul>
                    <li><a href='/index.html'>Home</a></li>
                    <li><a href='/src/pages/tratamento.html'>Tratamentos</a></li>
                    <li><a href="#">Catálago</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div class="col">
                <h3>Sobre</h3>
                <ul>
                    <li><a href='/src/pages/quem.html'>Quem sou eu</a></li>
                </ul>
            </div>
            <div class="col">
                <h3>Contato</h3>
                <ul>
                    <li><a>11 9-41219324</a></li>
                </ul>
            </div>
            <div class="col">
                <h3>Siga-nos</h3>
                <ul>
                    <li><a href="https://www.instagram.com/valeria_terapeutacapilar/">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                </ul>
            </div>
            <div class="col arealogo">
                <a href='https://loadcode.com.br/' target='_blank'>
                    <div class="logo">
                        <h6>Desenvolvido por</h6>
                        <img src="https://loadcode.com.br/src/assets/images/logo-thumb.png" alt="">
                    </div>
                </a>
            </div>
        </div>
        <p class="copyright">Direitos reservados a Valéria Masson © 2023<a href='https://loadcode.com.br/'
                target='_blank'>
                by LoadCode</a>
        </p>
    </div>
`;

const renderFooter = () => {
    document.querySelector('footer').innerHTML = componentFooterHTML;
}

renderFooter();

//-------------------------------------------------------------------------------------------------------------------------------------------
//Exemplo importando imagem:

const header = document.querySelector('header');
import logo from '../assets/img/logo.png' // com uso de imagem para enviar o endereço correro para o bundler Parcel, uso: src='$`{nomeDaImagem}'

const componentHeaderHTML = /*html*/`
    <div class='areaLogo'>
        <img src='${logo}' alt='' />
        <div class='menu-toggle' id='menu-toggle'>
            <div class='one'></div>
            <div class='two'></div>
            <div class='three'></div>
        </div>
    </div>
    <nav>
        <ul>
            <li id='button'>
                <div class='areaButton' id='buttonAgenda'>
                    <div class='ico'>
                        <img src='/src/assets/ico/calendar.png' alt=''>
                    </div>
                    <span>Agende sua avaliação</span>
                </div>
            </li>
            <li><a href='index.html'>Home</a></li>
            <li><a href='/src/pages/espaco.html'>espaco</a></li>
            <li><a href='/src/pages/tratamento.html'>Tratamentos</a></li>
            <li><a href='#'>Catálago</a></li>
            <li><a href='/src/pages/quem.html'>Quem sou eu</a></li>
            <li><a href='#'>Fale conosco</a></li>
        </ul>
    </nav>
`;

const renderHeader = () => {
    header.innerHTML = componentHeaderHTML;
}
renderHeader();

const menuHamburguer = document.getElementById('menu-toggle');
const menuToggle = document.querySelector('.menu-toggle');

menuHamburguer.onclick = () => {
    menuToggle.classList.toggle('on');
    header.classList.toggle('openMenu');
};