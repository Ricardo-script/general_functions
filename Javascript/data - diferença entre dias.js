// Data atual
var hoje = new Date();

// Data fornecida (2023-11-01)
var dataFornecida = new Date('2023-11-01');

// Calcula a diferença em milissegundos entre as duas datas
var diferencaEmMilissegundos = dataFornecida - hoje;

// Calcula a diferença em dias
var diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

console.log('Dias restantes: ' + diferencaEmDias);
