var array = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,];

var filtered = array.filter(function (el) {
  return el != null;
});

console.log(filtered);

//Um padrão típico que vejo frequentemente utilizado é remover elementos que são Falsas , que incluem uma cadeia vazia "", 0, NaN, null, undefined, e false.

var filtered = array.filter(Boolean);