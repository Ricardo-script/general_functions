import { useState, useEffect } from "react";

export default function App(){

	const [numero, setNumero] = useState<number>();

	useEffect(() => {
		console.log(numero);
	},[numero]);


	return(
		<div>
			<input type="number" value={numero} onBlur={(e) => setNumero(Number(e.target.value))}/> // types Number,String, boolean...
		</div>
	);
}