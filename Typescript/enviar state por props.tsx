//arquivo app.tsx:
import { useState } from 'react';
import Numeros from './Numeros';

export default function App(){

	const [numero, setNumero] = useState<number>(1);
	const [active, setActive] = useState(false);

	return(
		<div>
			<Numeros numero={numero} setNumero={setNumero}/>
			<input type="number" onChange={(e) => setNumero(Number(e.target.value))}/>
			<input type="text" onChange={(e) => setActive(Boolean(e.target.value))} />
		</div>
	);
}


//arquivo Numeros.tsx:

interface NumProps{
    numero: number;
    setNumero: (e: number) => void;
 // setStatus: (newState: boolean) => void;	
}

export default function Numeros({numero, setNumero}: NumProps){
    return(
        <div>
            <p>{numero}</p>
            <span>Componente Numero</span>
            <input type="number" onChange={(e) => setNumero(Number(e.target.value))}/>
        </div>
    );
}