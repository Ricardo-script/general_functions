//registro.tsx:
"use client";

import { useActionState } from "react";
import { handleSaveRegister } from "./actions";

export default function Register() {
    const [errors, action, isPending] = useActionState(
        handleSaveRegister,
        null
    );

    return (
        <main className="bg-slate-500 w-screen h-screen p-4">
            <form
                action={action}
                className="flex flex-col gap-4 w-80 border border-white p-6"
            >
                <div className="flex flex-col relative">
                    <label className="text-xs">Nome</label>
                    <input
                        type="text"
                        name="nameUser"
                        className="outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                    {errors?.nameUser && (
                        <p className="text-xs  text-red-400 absolute bottom-[-16px]">
                            {errors?.nameUser}
                        </p>
                    )}
                </div>
                <div className="flex flex-col relative">
                    <label className="text-xs">E-mail</label>
                    <input
                        name="email"
                        type="text"
                        className="outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                    {errors?.email && (
                        <p className="text-xs  text-red-400 absolute bottom-[-16px]">
                            {errors?.email}
                        </p>
                    )}
                </div>
                <div className="flex flex-col relative">
                    <label className="text-xs">Idade</label>
                    <input
                        name="idade"
                        type="text"
                        className="outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                    {errors?.idade && (
                        <p className="text-xs text-red-400 absolute bottom-[-16px]">
                            {errors?.idade}
                        </p>
                    )}
                </div>
                <button
                    className="bg-white hover:bg-slate-300 transition-colors duration-300 mt-5 text-base"
                    disabled={isPending}
                >
                    {isPending ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </main>
    );
}

// action.ts:

"use server";

type ErrorsType = {
    nameUser: string;
    email: string;
    idade: string;
};

export const handleSaveRegister = async (_: unknown, formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const nameUser = formData.get("nameUser") as string;
    const email = formData.get("email") as string;
    const idade = formData.get("idade") as string;

    const errors = {} as ErrorsType;

    if (nameUser.length < 5) {
        errors.nameUser = "O nome deve ter pelo menos 5 caracteres.";
    }
    if (!email.includes("@")) {
        errors.email = "O E-mail precisa ter @";
    }
    if (!idade) {
        errors.idade = "A idade não pode estar vazia.";
    }

    return errors;
};
