let s = '10,7,6,a5,8,2,0,9,4,b45,45c,47d,45b,45a';
let array = s.split(',');
array.sort((a, b) => parseInt(a) - parseInt(b));
console.log(array);