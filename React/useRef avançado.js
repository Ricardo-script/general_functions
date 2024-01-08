
// Simulando um checkBox personalizado:


import { useCallback, useRef } from "react";

function App(): JSX.Element {

    const checkBoxRef = useRef({ value: false }); // não é preciso tipar HTMLButtonElement ou algo assim, pois só quero armazenar um valor

    const handleValue = useCallback(() => {
        checkBoxRef.current.value = !checkBoxRef.current.value
        console.log(checkBoxRef.current.value);
    }, []);

    return (
        <div>
            <button onClick={handleValue}>Enviar</button> {/* Simulando um checkbox */}
        </div>
    );
}

export default App



//--------------------------------------------------------------------------------------------------------------------------




