const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    },500); // total de tempo igual ao do jump em animation
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft; // pega posição atual do tubo
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')// pega a posição do mario ['+' converte para numero]

    //console.log(pipePosition)
    //console.log(marioPosition)

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none'; // remove animation
        pipe.style.left = `${pipePosition}px` // ao chegar em 120 remove animação e atribui no style css left contendo o valor em px da posição do tubo

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px` // ao errar o mario deve manter na posição do erro

        mario.src = './src/images/game-over.png'; // ao errar troca de imagem
        mario.style.width = '75px'; // ao errar alterar tamanho da imagem de erro
        mario.style.marginLeft = '50px'; // ao errar alterar tamanho da imagem de erro

        clearInterval(loop);
    }
},10);

document.addEventListener('keydown', jump);