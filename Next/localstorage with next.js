/*
    Para usar o localStorage, setItem e getItem com Next.js, você pode seguir os seguintes passos:
    1. Crie um arquivo localStorage.js em um diretório comum (por exemplo, utils):
*/

// utils/localStorage.js

export const setLocalStorage = (key, value) => { // typescript: (key: string, value: any): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const getLocalStorage = (key) => { //typescript: (key: string): any => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
    }
    return null;
};


//-------------------------------------------------------------------------------------------------------------

//Importe as funções setLocalStorage e getLocalStorage no componente onde você deseja usá-las:
// pages/index.ts

import { useState, ChangeEvent, FormEvent } from 'react';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage';

export default function Home(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');
  const [storedValue, setStoredValue] = useState<string | null>(getLocalStorage('myKey'));

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setLocalStorage('myKey', inputValue);
    setStoredValue(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
      <p>Stored value: {storedValue}</p>
    </div>
  );
}

//-------------------------------------------------------------------------------------------------------------------

/*
    Neste exemplo, armazena e exibe um valor de entrada em localStorage usando as funções setLocalStorage 
    e getLocalStorage. uso de JSON.stringify e JSON.parse para serializar e desserializar os valores armazenados, 
    respectivamente. verificar se o window está definido antes de usar localStorage, porque o localStorage não está disponível 
    no lado do servidor em Next.js.
*/