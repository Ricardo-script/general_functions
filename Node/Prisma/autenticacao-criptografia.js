/* 
	1. yarn add bcrypt
	2. yarn add @types/bcrypt
*/

// criar um model para users:

model Users {
    id       String @id @default(uuid())
    email    String
    password String

    @@map("users")
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//criar arquivo de controller

import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import * as bcrypt from 'bcrypt';

class CreateUserController {
    async create(request: Request, response: Response) {
        const { email, password } = request.body;

        const hash = bcrypt.hashSync(password, 5);

        await prismaClient.users.create({
            data: {
                email: email,
                password: hash
            }
        });

        return response.status(201).json({ message: `Usuário ${email} criado com sucesso!` });
    }
}

export default new CreateUserController();

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Routes:

import CreateUserController from "./controllers/CreateUserController";
import { auth } from "./auth";

router.post('/auth', auth);
router.post('/newuser', CreateUserController.create);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//AUTENTICACAO:

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


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------