// GET:

//useGet.tsx:

'use client'
import { useState } from 'react'
import axios from 'axios'

type UseGetReturnType<T> = {
    executeGet: () => Promise<void>,
    loading: boolean,
    data: T[]
}

export function useGet<T>(url: string): UseGetReturnType<T> {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T[]>([]);

    const executeGet = async () => {
        setLoading(true);

        try {
            const response = await axios.get<T[]>(url);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    return { executeGet, loading, data };
}

// arquivo de chamada:

'use client'

import { useGet } from "@/hooks"

interface PostType {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default function Home(): JSX.Element {

    const {
        executeGet,
        data,
        loading
    } = useGet<PostType>('https://jsonplaceholder.typicode.com/posts');

    const readData = async () => {
        await executeGet();
    }

    return (
        <div>
            <button onClick={readData}>{loading ? 'Carregando...' : 'Load'}</button>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}


//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

//POST:

import { useState } from "react"
import axios from "axios"

type UsePostReturnType<T> = {
    executePost: (postData: T) => Promise<void>,
    loading: boolean,
    error: AxiosError | null
}

export function usePost<T>(url: string): UsePostReturnType<T> {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);

    const executePost = async (postData: T) => {
        setLoading(true);
        console.log('postData', postData)
        try {
            const response = await axios.post(url, postData);
            console.log('Response:', response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error);
                console.error('Error updating data:', error);
            } else {
                throw error;
            }
        } finally {
            setLoading(false);
        }
    }

    return { executePost, loading, error };
}

// arquivo de chamada:

'use client'

import { useRef } from "react";
import { usePost } from "./hooks";

type PostType = {
    nome: string
    email: string
    password: string
}

export default function Home(): JSX.Element {

    const formRef = useRef<HTMLFormElement>(null);

    const {
        executePost,
        loading,
        error
    } = usePost<PostType>('https://jsonplaceholder.typicode.com/posts');

    const sendData = async () => {
        const postData: PostType = {
            nome: formRef.current?.nome?.value,
            email: formRef.current?.email?.value,
            password: formRef.current?.password?.value
        };

        await executePost(postData);
    }

    return (
        <section>
            <form ref={formRef}>
                <input type="text" name="nome" />
                <input type="email" name="email" />
                <input type="password" name="password" />
            </form>
            <button onClick={sendData}>Send</button>
        </section>
    );
}



//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

//PUT:

import { useState } from 'react';
import axios, { AxiosError } from 'axios';

type UsePutReturnType<T> = {
    executePut: (id: string | number, data: T) => Promise<void>,
    loading: boolean,
    error: AxiosError | null
}

export function usePut<T>(url: string): UsePutReturnType<T> {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);

    const executePut = async (id: string | number, data: T) => {
        setLoading(true);

        try {
            const response = await axios.put(`${url}/${id}`, data);
            console.log('Response:', response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error);
                console.error('Error updating data:', error);
            } else {
                throw error;
            }
        } finally {
            setLoading(false);
        }
    }

    return { executePut, loading, error };
}


// arquivo de chamada:

'use client'

import { useRef } from "react";
import { usePut } from "./hooks";

type PostType = {
    nome: string
    email: string
    password: string
}

export default function Home(): JSX.Element {

    const formRef = useRef<HTMLFormElement>(null);

    const {
        executePut,
        loading,
        error
    } = usePut<PostType>('https://jsonplaceholder.typicode.com/posts');

    const sendData = async () => {

        const id = '1'
        const putData: PostType = {
            nome: formRef.current?.nome?.value,
            email: formRef.current?.email?.value,
            password: formRef.current?.password?.value
        };

        await executePut(id, putData);
    }

    return (
        <section>
            <form ref={formRef}>
                <input type="text" name="nome" />
                <input type="email" name="email" />
                <input type="password" name="password" />
            </form>
            <button onClick={sendData}>Send</button>
        </section>
    );
}


//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

//DELETE:

// useDelete.tsx

import { useState } from 'react';
import axios, { AxiosError } from 'axios';

type UseDeleteReturnType = {
    executeDelete: (id: string | number) => Promise<void>,
    loading: boolean,
    error: AxiosError | null
}

export function useDelete(url: string): UseDeleteReturnType {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);

    const executeDelete = async (id: string | number) => {
        setLoading(true);

        try {
            const response = await axios.delete(`${url}/${id}`);
            console.log('Response:', response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error);
                console.error('Error deleting data:', error);
            } else {
                throw error;
            }
        } finally {
            setLoading(false);
        }
    }

    return { executeDelete, loading, error };
}

// arquivo de chamada:

'use client'

import { useDelete } from "./hooks";

export default function Home(): JSX.Element {
    const {
        executeDelete,
        loading,
        error
    } = useDelete('https://jsonplaceholder.typicode.com/posts');

    const handleDelete = async (id: string | number) => {
        await executeDelete(id);
    }

    return (
        <button onClick={() => handleDelete('1')} disabled={loading}>
            {loading ? 'Excluindo...' : 'Excluir'}
            {error && <p>Ocorreu um erro ao excluir o post.</p>}
        </button>
    )
}


//----------------------------------------------------------------------------------------------------------

export type UseGetIdReturnType<T> = {
    executeGetParams: (url: string) => Promise<void>,
    loading: boolean,
    data: { response: T }
}

// --------------------------------------------------------------------------------------

hooks.tsx

export function useGetParams<T>(): UseGetIdReturnType<T> {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<{ response: T }>({ response: {} as T });

    const executeGetParams = useCallback(async (url: string) => {
        setLoading(true);

        try {
            await api.get(url)
                .then((res) => {
                    setData(res.data);
                })
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }, [])

    return { executeGetParams, loading, data };
}

//----------------------------------------------------------------------------------------------------------------------------------------

const handleGetCEP = async (cep: string) => {
	if (cep.length === 0) {
	    return
	}
	await executeGetParams(`api/address/${cep}`);

	console.log('data', data)
}

<Input name='cep' label='*CEP' placeholder='Digite o número do CEP' required type='text' onBlur={(e) => handleGetCEP(e.target.value)} />
