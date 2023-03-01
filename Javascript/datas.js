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