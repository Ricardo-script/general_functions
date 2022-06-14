
//Gerar string/caracteres aleatórios
const gerarRandomComLetras = () => {
	let r = (Math.random() + 1).toString(36).substring(7);
	console.log("random", r);
}

//-----------------------------------------------------------------------------------------------------------

//Gerar numeros aleatórios
//A função random() do objeto Math retorna um número pseudo-aleatório.

	Math.random();

//Para gerar números aleatórios na casa do inteiros, devemos multiplicar o método por um inteiro qualquer:

	Math.random() * 10
	
//Agora devemos utilizar a função Math.floor() para retirar a parte flutuante (números decimais).
	
	Math.floor(Math.random() * 10)
	
//Como gerar um número randômico até um valor máximo qualquer!

//O código abaixo gera números aleatórios entre 1 e 10.

	Math.floor(Math.random() * 10 + 1)
	

/*Não pense que estamos somando 10 + 1 e multiplicando por Math.random(). Na verdade, multiplicamos 10 por Math.random() e, somente depois, somamos uma unidade.

Podemos transformar nosso código em uma função onde recebemos como parâmetro o valor máximo aleatório.*/

	function getRandom(max) {
		return Math.floor(Math.random() * max + 1)
	}

//Como gerar um número randômico booleano (entre 0 e 1):
	Math.floor(Math.random() * 2);

//Como gerar um número randômico tipo bytes ou octet (entre 0 e 256):
	Math.floor(Math.random() * 256);
	
//Como gerar um número randômico no “range” dos inteiros positivos (entre 0 e 65536):
	Math.floor(Math.random() * 65536);

//Como gerar um número randômico no “range” dos inteiros incluindo os negativos (entre -32768 e 65536):
	Math.floor(Math.random() * 65536) - 32768;