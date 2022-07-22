//value = valor correspondente posição no array
    //index = indice do array
    //self = repete o array inteiro

    function itensUnicos(arr) {
        return arr.filter((value, index, self) => self.indexOf(value) === index)
    }

    const arr = [1, 2, 2, 3, 4, 4, 5, 6, 'a', 'b', 'b'];
    const unicos = itensUnicos(arr);
    console.log(unicos); // [1, 2, 3, 4, 5, 6, 'a', 'b']

    /*
        filter() é uma função que varre todos elementos do array e manda para uma função de callback definida pelo programador. 
        Nessa função faz uma comparação se é a primeira ocorrência do valor e só se for é que a filter() irá considerar como parte do novo array.

        O indexOf() dá a posição da primeira ocorrência. Se ela bater com o índice atual do elemento pesquisado, é um valor que 
        interessa no critério adotado. Se não bater significa que já é pelo menos uma segunda ocorrência desse valor, o que não interessa.
    
    */



//-------------------------------------------------------------------------------------------------------------------------------------------------------

// maneira 2

var array = ['a', 'b', 'b', 'c', 'c'];
var unique = [...new Set(array)];
console.log(unique);
