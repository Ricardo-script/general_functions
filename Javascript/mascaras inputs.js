// --Telefone:--------------------------------------------------------------------
const formatarTel = (value) => {
	const formatted = value.replace(/^(\d{2})(\d{5})(\d{4}).*/,"($1) $2-$3");
	console.log(formatted);
	return formatted;
}
formatarTel('11912345678');
//saída: (11) 91234-5678
//---------------------------------------------------------------------------------



//--CPF----------------------------------------------------------------------------
var cpf = '69845712398'
cpf = cpf.replace(/[^\d]/g, "");
var formataCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
//saída: '698.457.123-98'

//ou: exemplo com regex com tolerância a nulos ou undefined
function formatCpf(text) {
    const badchars = /[^\d]/g
    const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/
    const cpf = new String(text).replace(badchars, "");
    return cpf.replace(mask, "$1.$2.$3-$4");
 }
//---------------------------------------------------------------------------------



//--Email--------------------------------------------------------------------------
// verifica se o email é válido:
function validateEmail(emailAdress) {
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (emailAdress.match(regexEmail)) {
		return true;
	} else {
		alert('Por favor, forneça um endereço de e-mail válido');
		return false;
	}
}

let emailAdress = "test@gmail.";
console.log(validateEmail(emailAdress));
//---------------------------------------------------------------------------------



//CEP------------------------------------------------------------------------------
// /\D/g pesquisa global por caracteres que não são dígitos:
function formatarCep(cep) {
	const badchars = cep.replace(/\D/g, "") 
	const result = badchars.replace(/^(\d{5})(\d)/, "$1-$2")
	console.log(result);
}

formatarCep('06421000');
//---------------------------------------------------------------------------------