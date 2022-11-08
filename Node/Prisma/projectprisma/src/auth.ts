import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { prismaClient } from "./database/prismaClient";

export const auth = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    const user = await prismaClient.users.findFirst({
        where: {
            email,
        }
    });

    if (user === null) {
        return response.status(400).json({
            error: true,
            message: 'Usuário ou senha incorreto'
        })
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return response.status(400).json({
            error: true,
            message: 'Usuário ou a senha incorreta!' //a verificação é apenas da senha mas por boas praticas de segurança não deixar claro para quem errou saber que foi apenas a senha
        });
    }

    const token = sign(
        { email }
        , `${process.env.JWT_SALT}`, { // depois da virgula inserir um secret, inserido com a variavel de ambiente JWT_SALT (será o token + a chave secreta)
        expiresIn: 120, // dentro podemos inserir algumas propriedades: expiresIn é a qnd de tempo para expirar o token, nesse exemplo 120 segundos
    });

    return response.json({ token, email });
}