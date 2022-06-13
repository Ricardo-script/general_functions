//uso sem includes:

const fruta = "banana";

if(fruta === "banana" || fruta === "maça" || fruta === "pera"){
	//faça alguma coisa
}


//uso com includes:

const fruta = "banana";

if(['banana', 'maça', 'pera'].includes(frutas)){
	//faça alguma coisa
}

//verificar campos vazios:

if(['banana', 'maça', 'pera'].includes('')){
 	//faça alguma coisa	
}