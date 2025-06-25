//pegar dia de hoje
	var data = new Date();
	var dia = String(data.getDate()).padStart(2, '0');
	var mes = String(data.getMonth() + 1).padStart(2, '0');
	var ano = data.getFullYear();
	var dataAtual = ano + '-' + mes + '-' + dia;

	// pegar o dia de amanhã
	var amanha = new Date((new Date()).valueOf() + 1000*3600*24);
	var diaAmanha  = String(amanha.getDate()).padStart(2, '0');
	var mesAmanha  = String(amanha.getMonth() + 1).padStart(2, '0');
	var anoAmanha  = data.getFullYear();
	var dataAmanha = anoAmanha + '-' + mesAmanha + '-' + diaAmanha;
   
	console.log(dataAtual);
	console.log(dataAmanha);
	
//--------------------------------------------------------------------------------------
//formatar data no javascript

let date = new Date();
//console: Thu Feb 23 2023 11:52:25 GMT-0300 (Hora padrão de Brasília)

let formated = Intl.DateTimeFormat('pt-br').format(date)
//console: 23/02/2023

//---------------------------------------------------------------------------------------

const sumDateWithNumberOfDays = (date: Date, days: number): string => {
  date.setDate(date.getDate() + days);
  const sumDate = date.toLocaleDateString('pt-BR');
  return sumDate;
};

console.log(sumDateWithNumberOfDays(new Date(), 5));
console.log(new Date('2025-06-05T22:00:00.000Z'));

//Convertendo para time zone:
const dataUTC = new Date('2025-06-05T22:00:00.000Z');

const dataBrasilia = dataUTC.toLocaleString('pt-BR', {
  timeZone: 'America/Sao_Paulo',
});

console.log('dataBrasilia', dataBrasilia);
console.log(new Date().toISOString()) // transformar em UTC

/* 
  Africa/Banjul
  America/Los_Angeles
*/

// Diferença entre datas:------------------------------------------------------------------------------------

// Data atual
var hoje = new Date();

// Data fornecida (2023-11-01)
var dataFornecida = new Date('2023-11-01');

// Calcula a diferença em milissegundos entre as duas datas
var diferencaEmMilissegundos = dataFornecida - hoje;

// Calcula a diferença em dias
var diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

console.log('Dias restantes: ' + diferencaEmDias);
