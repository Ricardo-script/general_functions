/* 
    yarn add @hookform/resolvers
    yarn add react-hook-form
    yarn add zod
*/

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserFormSchema = z.object({
    name: z
        .string()
        .nonempty("O nome é obrigatório") //transform((name) => name.toUpperCase),
        .transform((name) => {
            return name
                .trim()
                .split(" ")
                .map((word) => {
                    return word[0]
                        .toLocaleUpperCase()
                        .concat(word.substring(1));
                })
                .join(" "); // capitalize
        }),
    email: z
        .string()
        .nonempty("O e-mail é obrigatório")
        .email("Formato de e-mail inválido"),
    password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors }, //formState para pegar os erros
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
    });

    const createUser = (data: CreateUserFormData) => {
        console.log(data);
    };

    return (
        <main style={{ margin: 30 }}>
            <form
                onSubmit={handleSubmit(createUser)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 300,
                    gap: 15,
                }}
            >
                <input type="text" {...register("name")} />
                {errors.name && <span>{errors.name.message}</span>}
                <input type="email" {...register("email")} />
                {errors.email && <span>{errors.email.message}</span>}
                <input type="password" {...register("password")} />
                {errors.password && <span>{errors.password.message}</span>}
                <button type="submit">Enviar</button>
            </form>
        </main>
    );
}

//********* ************** *************** **************** *************** ************** **********/


import { useFormContext } from "react-hook-form";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
}

export function Input(props: InputProps) {
    const { register } = useFormContext();

    return(
        <input
            id={props.name}
            {...register(props.name)}
            {...props}
        />
    );
}

//**************************************************************************************************/
/*Mais exemplos, habilitar botão somenmte quando formulario atender todos os requisitos com isValid,
  auto preencher valores nos inputs que vem de fora com reset()
*/

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const createUserFormSchema = z.object({
    name: z.string().nonempty("O campo nome é obrigatório"),
    email: z
        .string()
        .nonempty("O campo e-mail é obrigatório")
        .email("Formato de e-mail inválido"),
    password: z
        .string()
        .nonempty("O campo de senha é obrigatório")
        .min(6, "O campo de senha deve ter pelo menos 6 caracteres"),
});

type CreateUserTypes = z.infer<typeof createUserFormSchema>;

export default function App() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }, // isValid retorna booleano que verifica se atendeu todos os requisitos (habilitar botão)
    } = useForm<CreateUserTypes>({
        resolver: zodResolver(createUserFormSchema),
    });

    const createUser = (data: CreateUserTypes) => {
        console.log(data);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const apiResponse: CreateUserTypes = {
                name: "João da Silva",
                email: "joao.silva@email.com",
                password: "123456",
            };

            reset(apiResponse);
        };

        fetchUserData();
    }, [reset]);

    return (
        <main className="p-4">
            <form
                onSubmit={handleSubmit(createUser)}
                className="w-[400px] flex flex-col gap-2"
            >
                <div className="flex flex-col">
                    <label className="text-sm">Nome:</label>
                    <input
                        type="text"
                        className="w-full h-8 border border-zinc-300 outline-none px-1 rounded-md"
                        {...register("name")}
                    />
                    {errors.name && (
                        <span className="text-xs text-red-500">
                            {errors.name.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm">Email:</label>
                    <input
                        type="email"
                        className="w-full h-8 border border-zinc-300 outline-none px-1 rounded-md"
                        {...register("email")}
                    />
                    {errors.email && (
                        <span className="text-xs text-red-500">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm">Password:</label>
                    <input
                        type="password"
                        className="w-full h-8 border border-zinc-300 outline-none px-1 rounded-md"
                        {...register("password")}
                    />
                    {errors.password && (
                        <span className="text-xs text-red-500">
                            {errors.password.message}
                        </span>
                    )}
                </div>
                <button
                    disabled={!isValid}
                    className="bg-emerald-500 w-full h-8 text-white rounded-sm cursor-pointer active:relative active:top-[1px] disabled:opacity-50 disabled:pointer-events-none select-none"
                    type="submit"
                >
                    Enviar
                </button>
                <button
                    className="bg-emerald-500 w-full h-8 text-white rounded-sm cursor-pointer active:relative active:top-[1px]"
                    type="button"
                    onClick={() =>
                        reset({
                            name: "",
                            email: "",
                            password: "",
                        })
                    }
                >
                    Limpar
                </button>
            </form>
        </main>
    );
}

