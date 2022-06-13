
//html: os objetos devem possuir uma classe:

<div class="informacoes" data-anime="right">
	<p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.</p>
	<p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.</p>
  </div>

 <img class="imagem-3" src="img/wolf3.jpg" alt="Wolf" data-anime="left" />

//============================================================================================================================================================================


//CSS: 


/* Animação */
  
  [data-anime] {
    opacity: 0;
    transition: .3s;
  }
  
  [data-anime="left"] {
    transform: translate3d(-50px, 0, 0);
  }
  
  [data-anime="right"] {
    transform: translate3d(50px, 0, 0);
  }
  
  [data-anime="top"] {
    transform: translate3d(0, -50px, 0);
  }
  
  [data-anime].animate { /* adiciona com JS a classe animate em todos que tem data-anime */
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }

//=================================================================================================================================================================================

//JS Básico:

function animeScroll() {

    const target = document.querySelectorAll("[data-anime]");
    const animationClass = "animate";

    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4; //pegar a distancia do scroll até o topo (y = eixo vertical) *3/4 pega o numero correto de qualquer tela
    target.forEach(function (element) {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

animeScroll();

window.addEventListener("scroll",function () {
    animeScroll();
});

/*pose-se usar um setTimeout para aguardar alguns segundos para aparecer a imagem:
 setTimeout( () => {
	element.classList.add(animationClass);
},400)*/


//====================================================================================================================================================================================

//JS otimizado:

// Lógica
// 1 - Selecionar elementos que devem ser animados com atributo data ex: data-anime="left"
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação
// Debounce do Lodash

const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4; //pegar a distancia do scroll até o topo (y = eixo vertical) *3/4 pega o numero correto de qualquer tela
    target.forEach(function (element) {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

animeScroll();
// verifica se tem algum item com a variavel target, para que apenas dispare o a função addEventListener se houver document.querySelectorAll("[data-anime]");
if (target.length) {
    window.addEventListener("scroll",debounce(function () {
        animeScroll();
    }, 100));
}

/*window.addEventListener('scroll', function(){
    animeScroll(); 
}*/

//--------------------------------------------------------------------------------
//printar no console o numero do scroll
/*
window.addEventListener('scroll', function(){
    const windowTop = window.pageYOffset;
    console.log(windowTop);
});
*/
