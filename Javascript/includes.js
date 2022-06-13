	
	string.includes(searchString [,position])
	
/*O método includes() retorna true se o searchString existe na string, caso contrário retorna false.
O parâmetro opcional position especifica a posição dentro da string na qual começar a procurar pela searchString. O padrão é zero.
O includes() corresponde à string diferenciando letras maiúsculas e minúscula.
O exemplo a seguir usa o método includes() para verificar se a string “@” está presente ou não na string email:*/


let email = 'admin@example.com';
console.log(email.includes('@'));

// resultado: true




	