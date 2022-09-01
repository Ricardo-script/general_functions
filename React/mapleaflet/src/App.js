import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import car from './assets/car.png';

export default function App() {

	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);

	//-23.53066614386776, -46.86509136635194

	// rastreia posicao do usuario continuamente
	const watch = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);

	// para de rastrear posiçãoo do usuário ao clicar no botão "stop"
	const stopLocal = () => {
		navigator.geolocation.clearWatch(watch);
	}

	// callback para tratar posição do usuário
	function geoSuccess(pos) {
		// crie qualquer coisa legal usando as coordenadas
		setLatitude(pos.coords.latitude);
		setLongitude(pos.coords.longitude);

		console.log(pos);
		console.log('lat', pos.coords.latitude)
		console.log('lng', pos.coords.longitude)
	}

	// callback para tratar erros
	function geoError(err) {
		switch (err.code) {
			case 1:
				// permissão negada pelo usuario
				console.log('permissão negada pelo usuario')
				break;

			case 2:
				// nao foi possível alcançar os satélites GPS
				console.log('nao foi possível alcançar os satélites GPS')
				break;

			case 3:
				// a requisição demorou demais para retornar
				console.log('a requisição demorou demais para retornar')
				break;

			case 0:
				console.log('ocorreu um erro desconhecido...')
				// ocorreu um erro desconhecido...
				break;
		}
	}

	var geoOptions = {
		enableHighAccuracy: true,
		timeout: 30000,
		maximumAge: 3000
	};

	//trocar icone do alfinete
	const Icone = L.icon({
		iconUrl: car,
		shadowUrl: '',
		iconSize: [20, 45],   // size of the icon
		shadowSize: [82, 82],   // size of the shadow
		iconAnchor: [12.5, 36], // point of the icon which will correspond to marker's location
		popupAnchor: [-1, -31],
		shadowAnchor: [30, 82],    // the same for the shadow
	});

	return (
		<MapContainer center={[-23.53066614386776, -46.86509136635194]} zoom={30} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[latitude, longitude]} icon={Icone}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
}