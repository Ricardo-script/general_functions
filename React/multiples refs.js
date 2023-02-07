import { useEffect, useRef } from "react";

export default function App() {


    const refs = useRef([]);

    const arr = [1, 2, 3]

    useEffect(() => {
        //console.log(refs.current[0])
    }, [refs])

    return (
        arr.map((item, index) => (
            <input type="text" value={item} ref={(element) => { refs.current[index] = element }} />
        ))
    );
}
// ref={(element) => { refs.current[index] = element }} --> Adiciona o elemento atual ao nosso array refs.current*/
//ref = {(element => // element é o input em questão = <input type="text" value="1">)}
//const refs = {current: [<input>1</input>, <input>2</input>, <input>3</input>]
//refs.current[0] //<input type="text" value="1">
