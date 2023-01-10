//pegar dia de hoje
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var dataAtual = ano + '-' + mes + '-' + dia;

// pegar o dia de amanhã
var amanha = new Date((new Date()).valueOf() + 1000 * 3600 * 24);
var diaAmanha = String(amanha.getDate()).padStart(2, '0');
var mesAmanha = String(amanha.getMonth() + 1).padStart(2, '0');
var anoAmanha = data.getFullYear();
var dataAmanha = anoAmanha + '-' + mesAmanha + '-' + diaAmanha;

console.log(dataAtual);
console.log(dataAmanha);


//diferença entre duas datas:

const d1 = '2021-10-05';
const d2 = '2021-11-12';
const diffInMs = new Date(d2) - new Date(d1)
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log(diffInDays) // 38


// pegar a maior ou menor data
const arr = [
    { date: '2022-11-14T04:55:31.820Z' },
    { date: '2022-09-24T07:25:31.820Z' },
    { date: '2025-07-17T07:25:31.820Z' },
];

// ✅ Get Max date
const maxDate = new Date(
    Math.max(
        ...arr.map(element => {
            return new Date(element.date);
        }),
    ),
);

// 👇️ Thu Jul 17 2022
console.log(maxDate);

// ✅ Get Min date
const minDate = new Date(
    Math.min(
        ...arr.map(element => {
            return new Date(element.date);
        }),
    ),
);

// 👇️ Sat Sep 24 2022
console.log(minDate);
