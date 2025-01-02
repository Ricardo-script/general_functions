"use client";
import { Modal } from "@/components/Modal";
import { useState } from "react";

type DialogTypes = {
    open: boolean;
    message: string;
};

export default function RegisterForm() {
  
    const [dialog, setDialog] = useState<DialogTypes>({
        open: false,
        message: "",
    });
  
    const handleRegisterUser = (formData: FormData) => {
        const user = formData.get("user");
        const password = formData.get("password");

        if ([user, password].includes("")) {
            return setDialog({
                open: true,
                message: "Existem campos vazios",
            });
        }

        return setDialog({
            open: true,
            message: "Dados enviados com sucesso!",
        });
    };

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
                Enviar
            </button>
            <Modal
                open={dialog.open}
                message={dialog.message}
                onClose={() => setDialog((prev) => ({ ...prev, open: false }))}
            />
        </form>
    );
}
