function ativaNoScroll() {
	
	document.querySelectorAll('img').forEach((img, index) => {
		if(img.getBoundingClientRect().top + 250 < window.innerHeight) {
            //console.log('Imagem apareceu', index);
			img.src = img.getAttribute('data-src');
		};	
	})
}


window.addEventListener('scroll', ativaNoScroll);


// img.getBoundingClientRect().top + 250 < window.innerHeight) tentativa para scrollar mais um pouco a mais a pagina para aparecer a imagem


/*
escolher apenas uma imagem:
document.querySelectorAll('img')[0]


o codigo --> document.querySelectorAll('img')[2].getBoundingClientRect().top 
mostra a distância dessa imagem até o topo

o codigo --> window.innerHeight retorna o tamanho da tela do dispositivo atual

exemplo: 

document.querySelectorAll('img')[2].getBoundingClientRect().top = 1450.800048828125
window.innerHeight = 682
         
como trabalhar com esses dois valores?

se a imagem até o topo for menor que a altura do tamanho da tela atual 
a função retornará false ou true ( então da pra saber se a imagem apareceu ou não)

então se pergunta se a imagem apareceu ou não da seguinte forma:


document.querySelectorAll('img').forEach((img, index) => {
    if(img.getBoundingClientRect().top < window.innerHeight) {
        img.src = img.getAttribute('data-src');
    };	
*/

