//adicionar no arquivo que esta na pasta React

import { forwardRef, InputHTMLAttributes } from "react"

type InputProps = {
    name: string
    label: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(({ name, label, ...rest }, ref): JSX.Element => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                placeholder='Digite seu nome'
                ref={ref}
                {...rest}
            />
        </div>
    )
})

//------------------------------------------------------------------------------------------------------------------

Uso:

import { FormEvent, useCallback, useRef } from "react";
import { Input } from "./components/Input";

function App(): JSX.Element {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        console.log(inputRef.current?.value)
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <Input ref={inputRef} name='name' label='Nome completo' />
            <button>Enviar</button>
        </form>
    );
}

export default App

