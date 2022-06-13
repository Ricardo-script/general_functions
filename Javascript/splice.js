var myFish = ["angel", "clown", "mandarin", "surgeon"];

//(2,0) = a partir do índice 2,remove 0 elementos


var removed = myFish.splice(2, 0, "drum"); //= a partir do índice 2,remove 0 elementos e insere o elemento "drum"
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido

//remove 1 elemento do índice 3
removed = myFish.splice(3, 1);
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]

//remove 1 elemento a partir do índice 2, e insere "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//myFish é ["angel", "clown", "trumpet", "surgeon"]
//removed é ["drum"]

//remove 2 elementos a partir do índice 0, e insere "parrot", "anemone" e "blue"
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//myFish é ["parrot", "anemone", "blue", "trumpet", "surgeon"]
//removed é ["angel", "clown"]

//remove 2 elementos a partir do indice 3
removed = myFish.splice(3, Number.MAX_VALUE);
//myFish é ["parrot", "anemone", "blue"]
//removed é ["trumpet", "surgeon"]

//========================================================================================
//REMOVER ELEMENTOS DE UM ARRAY COM JAVASCRIPT
 

//Vamos ver neste artigo as diferentes formas de excluir elementos de um array utilizando JavaScript.

//Como base, vamos utilizar este array:

var numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];
//Para remover o primeiro elemento de um array, podemos utilizar o método shift().

numeros.shift();
console.log(numeros);
//Para remover o último elemento de um array, podemos utilizar o método pop().

numeros.pop();
console.log(numeros);
//Para remover um elemento de uma posição qualquer, primeiro se faz necessário localizar este elemento dentro do array. Para isso, podemos utilizar o método indexOf().



var index = numeros.indexOf(3);// neste caso o index do array 3 é a posição 2
//Depois de localizar o índice, podemos utilizar o método splice() para remover o elemento desejado.

if (index > -1) {
  numeros.splice(index, 1);
}
//Perceba que fizemos uma condição antes de executar o splice. Se o método indexOf() não localizar o elemento desejado, o seu retorno será -1.

//O método splice recebe dois parâmetros, o primeiro é a posição no array e o segundo é a quantidade de elementos a remover. O splice modifica o array original e retorna um nova array contendo os elementos que foram removidos.

//Uma forma de simplificar o comando acima, seria fazer da seguinte forma:

numeros.splice(numeros.indexOf(3), 1);
//Para concluir, vamos ver um exemplo onde podemos excluir várias ocorrências de um mesmo elemento.

var estados = ["RJ", "MG", "SP", "SC", "SP", "SP", "PR", "PE", "PA"];
var buscar = "SP";
var indice = estados.indexOf(buscar);
while(indice >= 0){
    estados.splice(indice, 1);
    indice = estados.indexOf(buscar);
}
console.log(estados);
//---------------------------------------------------------------------------------------------------------------------------------------
//Excluir item especifico em um array de objetos

const lixo = [
  {"nome": "garrafa pet", "tipo": "reciclável", "cod": 12, "armazenavel": false},
  {"nome": "lata de ref.", "tipo": "não reciclável", "cod": 22, "armazenavel": true},
  {"nome": "lapis de cor", "tipo": "não reciclável", "cod": 107, "armazenavel": false},
]

let coleta;

for(let i = 0; i < lixo.length; i++){
	if(lixo[i].nome == "lata de ref."){
		coleta = lixo.splice(i, 1)
	}
}

coleta = coleta[0];
console.log("lixo: ", lixo);
