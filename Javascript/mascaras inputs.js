// --Telefone:--------------------------------------------------------------------
function phoneMask(v) {

	let mask = v.replace(/\D/g, "");
	mask = mask.replace(/^0/, "");

	if (mask.length > 11) {
		mask = mask.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
	} else if (mask.length > 7) {
		mask = mask.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
	} else if (mask.length > 2) {
		mask = mask.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
	} else if (v.trim() !== "") {
		mask = mask.replace(/^(\d*)/, "($1");
	}
	console.log(mask)
	return mask;
}

phoneMask('11975848563');
//saída: (11) 97584-8563
//---------------------------------------------------------------------------------



//--CPF----------------------------------------------------------------------------
    function cpfMask(v){
        v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                                //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
        console.log(v)
        return v
    }

    cpfMask('65161174030');
    //saída 651.611.740-30
//---------------------------------------------------------------------------------




//--CNPJ-------------------------------------------------------------------------------------------------------------
function cnpjMask(v){
		v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
		v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
		v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
		v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
		v=v.replace(/(\d{4})(\d)/,"$1-$2")  

		console.log(v);          //Coloca um hífen depois do bloco de quatro dígitos
		return v;
	}

	cnpjMask('68527736000156');
	//saída: 68.527.736/0001-56

//------------------------------------------------------------------------------------------------------------------


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



//--CEP------------------------------------------------------------------------------
// /\D/g pesquisa global por caracteres que não são dígitos:
function formatarCep(cep) {
	const badchars = cep.replace(/\D/g, "") 
	const result = badchars.replace(/^(\d{5})(\d)/, "$1-$2")
	console.log(result);
}

formatarCep('06421000');
//---------------------------------------------------------------------------------


//--Remover acentos----------------------------------------------------------------
function removeAcento (text)
{       
    text = text.toLowerCase();   
	text = text.replace(new RegExp('[`"^]','gi'), '');
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}
//---------------------------------------------------------------------------------