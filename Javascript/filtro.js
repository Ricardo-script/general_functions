
var produtos = [
    {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"} 
]
var produtosEletrodomestico = produtos.filter(produto => produto.categoria == "Eletrodoméstico");
produtosEletrodomestico.forEach(produto => { 
    console.log(produto);
});


//-----------------------------------------------------------------------------------------------------------------------
//Exemplo 1
//filtrar somente numeros pares:

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var retorno = numeros.filter(pares => (pares %2)== 0);
console.log(retorno);

/*Saída:
  Array(5) [2, 4, 6, 8, 10]
 */


//Exemplo 2
//filtrar estados se iniciam com a letra S.

var estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte", "Santa Catarina", "Acre"];
var resultado = estados.filter( estadosComS  => (estadosComS.charAt(0) == "S"));
console.log(resultado);





