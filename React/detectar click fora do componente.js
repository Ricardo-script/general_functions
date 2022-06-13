import React, { useEffect, useRef, useState } from "react";

const SampleComponent = () => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
    }
  };

  const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <button ref={myRef} onClick={handleClickInside}>
      {clickedOutside ? "Bye!" : "Hello!"}
    </button>
  );
};

export default SampleComponent;


// exemplo basico:------------------------------------------------------------------

import React, { useEffect, useRef } from 'react';

const myRef = useRef();

//capturar evento do click fora do filtro para fechar caixa
    useEffect(() => {
        const clickFora = (e) => {
            if(!myRef.current.contains(e.target)){
                console.log('funcionou')
            }
        }
        document.addEventListener('mousedown', clickFora);
    },[]);
	
	return(
        <BoxMenu className='identificacao' ref={myRef} display={props.open}>



//---------------------------------------------------------------------------------


// ou de forma direta
  useEffect(() => {
        document.addEventListener('mousedown', (e) =>{
            if(!myRef.current.contains(e.target)){
                props.onClose(false);
            }
        });
    }, []);
	
	