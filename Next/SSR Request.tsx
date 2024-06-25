async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Teste() {
    const data = await getData();

    console.log("data", data);

    return (
        <div>
            <span>{data.title}</span>
        </div>
    );
}
