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

