import { useEffect, useRef } from 'react'

export default function App() {

	const style = {
		margin: 300,
		width: 200, height: 200, backgroundColor: 'green'
	}

	const boxRef = useRef();

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
	}, []);

	const handleOutsideClick = (event) => {
		if (boxRef && !boxRef.current.contains(event.target)) {
			alert('you just clicked outside of box!');
		}
	}



	return (
		<div ref={boxRef} style={style}></div>
	);
}