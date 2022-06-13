	const array1 = [1, 2, 3, 4];
	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	// 1 + 2 + 3 + 4
	console.log(array1.reduce(reducer));
	// expected output: 10

	// 5 + 1 + 2 + 3 + 4
	console.log(array1.reduce(reducer, 5));
	// expected output: 15

//---------------------------------------------------------------------------//

	const soma[1,2,3];
 
	const total = (acumulado, valor) => acumulado + valor;
 
	console.log(soma.reduce(total));
  
  //resultado = 6
  
 //------------------------------------------------------------------------//
	//ou:
 
	const numbersList = [1, 2, 3];
	const total = numbersList.reduce((total, currentElement) => total + currentElement);
	
	/* Resultado:
		6
	*/
	
	
	//Array de objetos
	fruits = [
		{  description: 'orange', Amount: 50},
		{  description: 'orange', Amount: 50},
		{  description: 'apple', Amount: 75},
		{  description: 'kiwi', Amount: 35},
		{  description: 'watermelon', Amount: 25},
	];
const sumall = fruits.map(item => item.Amount).reduce((prev, curr) => prev + curr, 0);

// console.log(sumall) // = 235
//------------------------------------------------------------------------------------//

// Somar somente o total de laranjas:

const listLaranjas = [];
fruits.forEach( (item) => {
    if(item.description === 'orange'){
        listLaranjas.push(item)
    }
})
console.log('lista de laranjas',listLaranjas);
const soma = listLaranjas.map(item => item.Amount).reduce((acumulado, atual) => acumulado + atual);
console.log('soma total de laranjas:', soma);
  