// método mais limpo:

const replaceSpecialChars = (str) => {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos
		.replace(/([^\w]+|\s+)/g, '-') // Substitui espaço e outros caracteres por hífen
		.replace(/\-\-+/g, '-')	// Substitui multiplos hífens por um único hífen
		.replace(/(^-+|-+$)/, ''); // Remove hífens extras do final ou do inicio da string
}

console.log(replaceSpecialChars('Esta é uma frase!!!'));

//--------------------------------------------------------------------------------------------------------


/*
O início e o fim /são chamados de delimitadores. Eles dizem ao intérprete onde a regex começa e termina. 
Qualquer coisa após o delimitador de fechamento é chamado de "modificador", neste caso ge i.

Os modificadores ge têm estes significados:i

g= global, corresponde a todas as instâncias do padrão em uma string, não apenas uma
i= não diferencia maiúsculas de minúsculas (assim, por exemplo, /a/icorresponderá à string "a"ou "A".

*/


 var value = event.target.value;
	value = value.toLowerCase();   
	value = value.replace(new RegExp('[´!*.:;?$%@¨&`"^=~ <,>#-+]','gi'), '');                                                      
	value = value.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
	value = value.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
	value = value.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
	value = value.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
	value = value.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
	value = value.replace(new RegExp('[Ç]','gi'), 'c');

//--------------------------------------------------------------------------------------------------------