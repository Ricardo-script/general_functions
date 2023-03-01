import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('@/components/Leaflet'),
    { ssr: false }
)

export default function Mapa() {
    return (
        <>
            <DynamicComponentWithNoSSR />
        </>

    );
}