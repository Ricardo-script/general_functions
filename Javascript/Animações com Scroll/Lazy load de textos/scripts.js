
function animeScroll() {

    const target = document.querySelectorAll("[data-anime]");
    const animationClass = "animate";

    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4; //pegar a distancia do scroll até o topo (y = eixo vertical) *3/4 pega o numero correto de qualquer tela
    target.forEach(function (element) {
        if (windowTop > element.offsetTop) {
            setTimeout( () => {
                element.classList.add(animationClass);
            },400)
        } else {
            element.classList.remove(animationClass);
        }
    });
}

animeScroll();


window.addEventListener("scroll",function () {
    animeScroll();
});