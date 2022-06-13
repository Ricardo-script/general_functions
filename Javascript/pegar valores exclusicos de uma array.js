var array = ['a', 'b', 'b', 'c', 'c'];
var unique = [...new Set(array)];
console.log(unique);


//resultado:

[
  "a",
  "b",
  "c"
]