/*
Utilize replace() para substituir apenas todos os espaços
string.replace(/\s+/g, '')
O padrão de expressão regular \s refere-se a qualquer símbolo de espaço em branco: espaços, separadores, e quebras de linha.

Exemplo:

*/
    const removeSpacesFromString = () => { 
        let text1 =  
            "site/ delft stack .com/"; 

        let text2 =  
            text1.replace(/\s+/g, ''); 

        document.querySelector('.outputString').textContent 
            = text2; 
    } 
	
	
	// O método trim() só remove os espaços em branco do início e/ou fim de um texto, não os espaços que estão no meio. ex:
	
	var str = '   foo  ';
	console.log(str.trim()); // retorna 'foo'
 