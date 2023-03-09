/* 
	Documentação do React Leaflet: https://react-leaflet.js.org
	
	# instalar leaflet: 

	1. yarn add react react-dom leaflet
	2. yarn add react-leaflet
	
	//Com uso do Typescript, instalar também o types:
	yarn add -D @types/leaflet
	
	## Módulos a serem importados:
	
	import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
	
	-------------------------------------------------------------------------
	
	##Obs: O Leaflet não funcionará se não inserir o styles 
	### Para isso acesse: https://leafletjs.com/reference.html 

	#Nessa documentação, ir na aba 'Tutorial' clique em 'Leaflet Quick Start Guide'
	#Será apresentado a seguinte parte do documento:

	#Preparando sua página
	#Antes de escrever qualquer código para o mapa, você precisa executar as seguintes etapas de preparação em sua página:

	#Inclua o arquivo CSS do folheto na seção principal do seu documento:

	 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
	   integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
	   crossorigin=""
	 />
	   
	#colar o link acima no html dentro da pasta Public

	#Logo após, incluir em uma folha de estilo o css:

	.leaflet-container{
		width: 100vw;
		height: 100vh;
	}
	
	importar os estilos: 
	import 'leaflet/dist/leaflet.css';
	
	
*/


import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Leaflet() {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position='bottomright' />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

//Inserir emoji no Zoomcontrol

<ZoomControl position="bottomright" zoomInText="🧐" zoomOutText="🗺️" />


