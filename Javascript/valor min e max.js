var array = [267, 306, 108];
var largest = Math.max.apply(Math, array); // 306

//A função apply é usada para chamar outra função, com um determinado contexto e argumentos, fornecidos como uma matriz. As funções min e max podem receber um número arbitrário de argumentos de entrada: Math.max (val1, val2, ..., valN)

//Então, se nós chamamos:

	Math.min.apply(Math, [1,2,3,4]);

//A função apply será executada:

	Math.min(1,2,3,4);
	
//A sintaxe mais fácil, com o novo operador spread :

var arr = [1, 2, 3];
var max = Math.max(...arr);