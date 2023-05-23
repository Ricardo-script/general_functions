export default function Javascript() {
    const newDate = new Date();

    console.log(newDate); //Tue May 23 2023 07:45:11 GMT-0300 (Hora padrão de Brasília)

    const dateFormatter = (date: Date) => {
        return new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "short",
        }).format(date);
    };

    console.log(dateFormatter(newDate)); //23/05/2023

    return (
        <>
            <h2>JS</h2>
        </>
    );
}
