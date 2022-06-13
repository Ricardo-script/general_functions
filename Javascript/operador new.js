function Car(make, model, year) {
  this.teste1 = make;
  this.teste2 = model;
  this.teste3 = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.teste1);
// expected output: "Eagle"

//=============================================================================================================================

/*
Exemplos
Tipo de objeto e instância de objeto
Suponha que você quer criar um tipo de objeto para carros. Você quer que esse tipo de objeto se chame carro,
e quer que ele tenha propriedade para fabricante, modelo e ano. Para fazer isso, você escreveria a função a seguir:
*/

function Carro(fabricante, modelo, ano) {
  this.fabricante = fabricante;
  this.modelo = modelo;
  this.ano = ano;
}

//Agora você pode criar um objeto chamado meucarro como a seguir:
var meucarro = new Carro("Eagle", "Talon TSi", 1993);