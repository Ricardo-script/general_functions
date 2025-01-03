//page.tsx:

import RegisterForm from "./register-form";

export default function Register() {
    return (
        <main className="bg-slate-500 w-screen h-screen p-4">
            <RegisterForm />
        </main>
    );
}

//-------------------------------------------------------------------------------------------------------------------

//register-form.tsx:

import { useActionState } from "react";
import { registerUser } from "./actions";

export default function RegisterForm() {
    const [result, handleRegisterUser, isPending] = useActionState(
        registerUser,
        { show: false, message: "" }
    );

    return (
        <form action={handleRegisterUser} className="flex flex-col w-80 gap-4">
            <input
                type="text"
                name="user"
                placeholder="Digite seu nome"
                className="outline-none indent-1"
            />
            <input type="text" name="password" className="outline-none" />
            <button type="submit" className="bg-white w-24 rounded-md">
                {isPending ? "Carregando..." : "Enviar"}
            </button>
            {result.show && <span>{result.message}</span>}
        </form>
    );
}

//--------------------------------------------------------------------------------------------------------------------

//action.tsx:

'use server'

export async function registerUser(_: unknown, data: FormData) {
    const { user, password } = Object.fromEntries(data);

    console.log("data", user, password);

    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });

    if ([user, password].includes("")) {
        return {
            show: true,
            message: "Campos vazios",
        };
    }

    return {
        show: true,
        message: "Dados enviados com sucesso!",
    };
}
