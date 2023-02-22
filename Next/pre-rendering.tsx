//pre-rendering - carrega os dados antes do usuário acessar (dando a impressão de carregamento instantâneo)

interface todoTypes {
    id: number
    title: string
}

interface PropsTodo {
    todos: todoTypes[]
}

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos: [] = await data.json()

    return {
        props: { todos }
    }

}


export default function Todos({ todos }: PropsTodo) {
    return (
        <div>
            <h1>Tarefas para fazer:</h1>
            <ul className='todoList'>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}