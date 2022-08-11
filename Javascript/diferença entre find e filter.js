//Find retorna somente um valor e esse é o primeiro valor encontrado ignorando os demais:

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// saida: 12


//Filter retorna todos os valores correspondente ao filtro requerido retornando um array

const array1 = [5, 12, 8, 130, 44];

const filterArray = array1.filter(e => e > 10);

console.log(filterArray);
// saida: (3) [12, 130, 44]


