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
