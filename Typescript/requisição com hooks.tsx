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
    error: string
}

export function usePost<T>(url: string): UsePostReturnType<T> {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const executePost = async (postData: T) => {
        setLoading(true);
        console.log('postData', postData)
        try {
            const response = await axios.post(url, postData);
            console.log('Response:', response);
        } catch (error) {
            console.error('Error posting data:', error);
            //setError(error)
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
