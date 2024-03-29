//---- POST: ---------------------------------------------------------------------------------------------
import { useCallback, useState } from "react";
import axios, { AxiosError } from "axios";

type UsePostReturnType<InputData, OutputData> = {
    executePost: (url: string, postData: InputData,) => Promise<OutputData>,
    loading: boolean,
    data: OutputData | null
    error: AxiosError | null
}

//InputData sera o tipo que contem os parametros na hora da requisição, enquanto OutputData sera a resposta que vem do response
export function usePost<InputData, OutputData>(): UsePostReturnType<InputData, OutputData> {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosError | null>(null);
    const [data, setData] = useState<OutputData | null>(null);

    const executePost = useCallback(async (url: string, postData: InputData) => {
        setLoading(true);
        try {
            const res = await axios.post(url, postData)
            setData(res.data);
            return res.data;
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
    }, []);

    return { executePost, loading, data, error };
}

// Arquivo de chamada:
/*

import { Fragment, useRef } from "react";
import { usePost } from "./hooks/useRequest";

export default function App(): JSX.Element {

    interface PostType {
        userId: number,
        id: number,
        title: string,
        body: string
    }

    const form = useRef<HTMLFormElement>(null);
    const { executePost } = usePost<PostType, PostType>(); //O 2º PostType esta repetido porque o response tbm retorna os mesmo valores de PostType 

    const formData = (): PostType => {
        const userId = form.current?.userId.value;
        const id = form.current?.idData.value;
        const title = form.current?.titleData.value;
        const body = form.current?.bodyData.value;

        return { userId, id, title, body }
    }

    const sendData = () => {
        executePost('https://jsonplaceholder.typicode.com/posts', formData())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <Fragment>
            <form ref={form}>
                <input name='userId' type="number" placeholder='userId' />
                <input name='idData' type="number" placeholder='id' />
                <input name='titleData' type="text" placeholder='title' />
                <input name='bodyData' type="text" placeholder='body' />
            </form>
            <button onClick={sendData}>Enviar</button>
        </Fragment>
    );
}


*** multiplos: --- ---- ---- ---- ---- ----

const { executePost: postCommunication, data: communicationData } = usePost<
        BodyCommunication,
        CommunicationInterface
    >();

    const { executePost: postEvent, data: eventData } = usePost<
        BodyEvent | BodyCommunication,
        CommunicationInterface | EventInterface
    >();

    ou quando não precisa usar o response.data ao mesmo tempo: 
     const { executePost, data } = usePost<BodyEvent | BodyCommunication, CommunicationInterface | EventInterface>();
*/


//-------------------------------------------------------------------------------------------------------------
//----- GET: --------------------------------------------------------------------------------------------------

type UseGetReturnType<T> = {
    executeGet: (url: string) => Promise<T[]>,
    loading: boolean,
    data: T[]
}

export function useGet<T>(): UseGetReturnType<T> {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T[]>([]);

    const executeGet = async (url: string): Promise<T[]> => {
        setLoading(true);

        try {
            const response = await axios.get<T[]>(url);
            setData(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return []; // Retornar um valor padrão ou tratar o erro conforme necessário
        } finally {
            setLoading(false);
        }
    }

    return { executeGet, loading, data };

    // Arquivo de chamada:
    /* 
    
        import { useGet } from "./hooks/useRequest"

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
            } = useGet<PostType>();

            const readData = async () => {
                await executeGet('https://jsonplaceholder.typicode.com/posts')
                    .then(res => console.log(res))
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
    
    */
}

//-------------------------------------------------------------------------------------------------------------
//----- PUT: --------------------------------------------------------------------------------------------------

type UsePutReturnType<T> = {
    executePut: (url: string, id: string | number, data: T) => Promise<T>,
    loading: boolean,
    error: AxiosError | null
}

export function usePut<T>(): UsePutReturnType<T> {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);

    const executePut = async (url: string, id: string | number, data: T): Promise<T> => {
        setLoading(true);

        try {
            const response = await axios.put<T>(`${url}/${id}`, data);
            return response.data; // Retorna a resposta de dados do axios.put
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error);
                console.error('Error updating data:', error);
                throw error; // Lança o erro para ser tratado no ponto de chamada, se necessário
            } else {
                throw error;
            }
        } finally {
            setLoading(false);
        }
    }

    return { executePut, loading, error };

    //Arquivo de chamada

    /* 
        import { useRef } from "react";
        import { usePut } from "./hooks/useRequest";

        type PostType = {
            nome: string
            email: string
            password: string
        }

        export default function Home(): JSX.Element {

            const formRef = useRef<HTMLFormElement>(null);

            const {
                executePut,
            } = usePut<PostType>();

            const sendData = async () => {

                const id = '1'
                const putData: PostType = {
                    nome: formRef.current?.nome?.value,
                    email: formRef.current?.email?.value,
                    password: formRef.current?.password?.value
                };

                await executePut('https://jsonplaceholder.typicode.com/posts', id, putData)
                    .then(res => console.log(res))
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

    */
}

//-------------------------------------------------------------------------------------------------------------
//----- DELETE: -----------------------------------------------------------------------------------------------


type UseDeleteReturnType = {
    executeDelete: (url: string, id: string | number) => Promise<void>,
    loading: boolean,
    error: AxiosError | null
}

export function useDelete(): UseDeleteReturnType {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);

    const executeDelete = async (url: string, id: string | number) => {
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

    //Arquivo de chamada

    /* 
        import { useDelete } from "./hooks/useRequest";

        export default function Home(): JSX.Element {
            const {
                executeDelete,
                loading,
                error
            } = useDelete();

            const handleDelete = async (id: string | number) => {
                await executeDelete('https://jsonplaceholder.typicode.com/posts', id)
                    .then(res => console.log(res))
            }

            return (
                <button onClick={() => handleDelete('1')} disabled={loading}>
                    {loading ? 'Excluindo...' : 'Excluir'}
                    {error && <p>Ocorreu um erro ao excluir o post.</p>}
                </button>
            )
        }
    
    */
}
