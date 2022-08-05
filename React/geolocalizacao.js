// pega localização atual do dispositivo:

const getLocation = () => {
		navigator.geolocation.getCurrentPosition( location => {
		console.log(location);
	})
}


//-----------------------------------------------------------------------------------------------------------------------------

// Exemplo basico sem atualização em tempo real:

export default function App(){

	const getLocal = () => {
		navigator.geolocation.getCurrentPosition( geoSuccess, geoError, geoOptions)
	}

	function geoSuccess( pos ) {
		// crie qualquer coisa legal usando as coordenadas
		console.log(pos);
		console.log('lat', pos.coords.latitude)
		console.log('lng', pos.coords.longitude)
	}
	
	function geoError( err ) {
		switch( err.code ) {
			case 1:
				// permissão negada pelo usuario
				break;
	
			case 2:
				// nao foi possível alcançar os satélites GPS
				break;
	
			case 3:
				// a requisição demorou demais para retornar
				break;
	
			case 0:
				// ocorreu um erro desconhecido...
				break;
		}
	}
	
	var geoOptions = {
		enableHighAccuracy: true,
		timeout: 30000,
		maximumAge: 3000
	};
		
	return(
		<button onClick={() => getLocal()}>Get</button>
	);
}

/**
 *  Configurações adicionais
	Agora que já temos uma função para capturar a posição do usuário e outra para tratar os possíveis erros, podemos também opicionalmente 
	utilizar um terceiro parâmetro, que é o objeto PositionOptions. Esse objeto possui três proriedades que são:

    1. enableHighAccuracy: Um valor boolean, por padrão false. Se definir como true, e o dispositivo do usuário suportar tal funcionalidade, 
	irá tentar utilizar GPS para aumentar a precisão da localização, por exemplo.

    2. timeout: Aqui definimos o tempo máximo em milisegundos que a requisição poderá demorar antes de disparar um erro TIMEOUT que vimos acima.

    3. maximumAge: O tempo máximo em milisegundos que o dispositivo pode fazer um cache da localização do usuário.
 * 
 * 
 */
 
 
 //------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 // ----- Atualização em tempo real:----------------------------------------------------------------------------------------------------------------------------------
 
 /*
	watchPosition() e clearWatch()
	Ao invés de apenas pegar a localização do usuário, nós podemos também acompanhar continuamente sua posição, 
	atualizando as coordenadas sempre que o usuário se mover. Para isso nós utilizamos o método watchPosition(). 
	Esse método funciona da mesma forma que o getCurrentPosition(), a única diferença é que a função geoSuccess() 
	do nosso exemplo será chamada toda vez que o usuário se locomover, e o método watchPosition() retorna um número, 
	para que possamos parar de rastrear a posição do usuário quando desejarmos.

	Para parar de rastrear a posição do usuário, basta utilizarmos o método clearWatch() passando à ele como argumento
	o número retornado pelo método watchPosition(). Veja agora um exemplo:
 
 */
 
 export default function App() {

	// rastreia posicao do usuario continuamente
	const watch = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);

	// para de rastrear posiçãoo do usuário ao clicar no botão "stop"
	const stopLocal = () => {
		navigator.geolocation.clearWatch(watch);
	}


	// callback para tratar posição do usuário
	function geoSuccess(pos) {
		// crie qualquer coisa legal usando as coordenadas
		console.log(pos);
		console.log('lat', pos.coords.latitude)
		console.log('lng', pos.coords.longitude)
	}

	// callback para tratar erros
	function geoError(err) {
		switch (err.code) {
			case 1:
				// permissão negada pelo usuario
				break;

			case 2:
				// nao foi possível alcançar os satélites GPS
				break;

			case 3:
				// a requisição demorou demais para retornar
				break;

			case 0:
				// ocorreu um erro desconhecido...
				break;
		}
	}

	var geoOptions = {
		enableHighAccuracy: true,
		timeout: 30000,
		maximumAge: 3000
	};

	return (
		<div>
			<button onClick={() => stopLocal()}>Stop</button>
		</div>
	);
}
 
 
 //------------------------------------------------------------------------------------------------------
 //Outros exemplos:
 
import { useEffect } from 'react';

export default function App(){

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(function (position) {
				console.log("Latitude is :", position.coords.latitude);
				console.log("Longitude is :", position.coords.longitude);
			});
		}
	},[]);

	return(
		<div>
			<h4>Using geolocation JavaScript API in React</h4>
		</div>

	);
}

 //------------------------------------------------------------------------------------------------------
 
 
 
 
 