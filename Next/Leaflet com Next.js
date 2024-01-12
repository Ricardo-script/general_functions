yarn add leaflet
yarn add react-leaflet
yarn add -D @types/leaflet @types/react-leaflet


// "leaflet": "^1.9.4",

//-----------------------------------------------------------------------

//src/components/Map.tsx

'use client'

import L from "leaflet"
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

export default function Map(): JSX.Element {
    return (
        <MapContainer style={{
            width: '100vw',
            height: '100vh'
        }} center={[-23.5088797, -46.8861615]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position='bottomright' />
            <Marker icon={
                new L.Icon({
                    iconUrl: MarkerIcon.src,
                    iconRetinaUrl: MarkerIcon.src,
                    iconSize: [25, 41],
                    iconAnchor: [12.5, 41],
                    popupAnchor: [0, -41],
                    shadowUrl: MarkerShadow.src,
                    shadowSize: [41, 41]
                })
            }
                position={[-23.5088797, -46.8861615]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

//----------------------------------------------------------------------------------------------------------------------------------------

//Inserir emoji no ZoomControl
//<ZoomControl position="bottomright" zoomInText="🧐" zoomOutText="🗺️" />

//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

//src/app/page.tsx:

/* 
	Sem SSR
	Para carregar dinamicamente um componente no lado do cliente, você pode usar a ssropção para desabilitar a renderização do servidor. 
	Isso é útil se uma dependência ou componente externo depender de APIs de navegador como window.
*/


import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), { // é necessário que Map seja uma exportação default para funcionar
    ssr: false
});

export default function Home() {
    return (
        <main>
            <DynamicComponentWithNoSSR />
        </main>
    )
}



