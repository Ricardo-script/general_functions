let yourDate = new Date();
const date = yourDate.toISOString().split('T')[0];
return date.split('-').reverse().join('/'); // date.split('-').reverse().join('/'); formata para o horario brasileiro