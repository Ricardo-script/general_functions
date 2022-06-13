import React, { Component, useState, useRef,useEffect } from 'react';
import { render } from 'react-dom';

export const useMountEffect = (fun) => useEffect(fun, []);

// Gneral Focus Hook
const UseFocus = () => {
	const htmlElRef = useRef(null)
	const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

	return [ htmlElRef,  setFocus ] 
}

const isBoolean = (param) => typeof(param) === "boolean"

const App = () => {

  const [input1Val, setInput1Val] = useState("")
  const [input1Ref, setInput1Focus] = UseFocus()

    const [input2Val, setInput2Val] = useState("")
  const [input2Ref, setInput2Focus] = UseFocus()

  const [completeBtnRef, setCompleteFocus] = UseFocus()

  useMountEffect( setInput1Focus )

  return (
    <div>
      <label>1 char long 
        <input
          value={input1Val}

          onChange={(e)=>{
            const val = e.target.value 
            setInput1Val(val)
            if (val.length===1) setInput2Focus()
          }}
          ref={input1Ref}
        />
      </label>
      <label>2 char long 
        <input
          value={input2Val}
          
          onChange={(e)=>{
            const val = e.target.value
            setInput2Val(val)
            if (val.length===2) setCompleteFocus()
          }}
          ref={input2Ref}
        />
      </label>
      <button
        ref={completeBtnRef}
      >
        Complete
      </button>
      <button
        onClick={ ()=> {
          setInput1Val("")
          setInput2Val("")
          setInput1Focus() 
        }}
      >
        start again
      </button>
    </div>
  )

} 

render(<App />, document.getElementById('root'));
