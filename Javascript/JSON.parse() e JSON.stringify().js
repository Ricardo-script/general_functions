const myObj = {
  name: 'Skip',
  age: 2,
  favoriteFood: 'Steak'
};

const myObjStr = JSON.stringify(myObj);

console.log(myObjStr);
// "{"name":"Sammy","age":6,"favoriteFood":"Tofu"}"


console.log(JSON.parse(myObjStr));
// Object {name:"Sammy",age:6,favoriteFood:"Tofu"}

//-------------------------------------------------------------------------------------------------------------------

// embora os métodos sejam geralmente usados em objetos, eles também podem ser usados em arrays:

const myArr = ['bacon', 'lettuce', 'tomatoes'];

const myArrStr = JSON.stringify(myArr);

console.log(myArrStr);
// "["shark","fish","dolphin"]"

console.log(JSON.parse(myArrStr));
// ["shark","fish","dolphin"]