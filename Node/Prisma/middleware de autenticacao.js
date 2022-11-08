/* 
	1. Instalar yarn add jsonwebtoken
	2. Instalar os types yarn add -D @types/jsonwebtoken
	3. yarn add bcrypt
	4. yarn add @types/bcrypt
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// No Arquivo .env criar uma variavel de ambiente:

JWT_SALT=123

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// depois Criar a Model para usuários
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Criar um controller de criação de usuários, ex: CreateUserController ou UserController

import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import * as bcrypt from 'bcrypt';

class CreateUserController {
    async create(request: Request, response: Response) {
        const { email, password } = request.body;

        const hash = bcrypt.hashSync(password, 5); // encriptografa password

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


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Dentro de src criar uma pasta chamada routes
//Dentro da pasta routes criar um arquivo chamado: auth.ts (rota de autenticação) [auth é usada como uma especie de controller]:

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



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Criar um middleware [o middleware fica entre a chamada da rota e a função de rota : router.get('/secret', isAuthenticated, secret) ]
//Dentro da pasta routes, criar uma pasta chamada middleware, e dentro de middleware criar um arquivo chamada isAuthenticated.ts:
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export const isAuthenticated = (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) { //caso não exista token
        return response.status(401).json({ message: 'JWT Token is missing' });
    }

    const token = authHeader.split(' ')[1]; // da um split no espaço e pega o segundo item [1] 'Bearer ', 'asdfsgsdertreg654g9gfa9se8fwf'

    try {
        const decodedToken = verify(token, `${process.env.JWT_SALT}`);  //verifica se o token é válido (verify é dojsonwebtoken); é o token + a chave secreta process.env.JWT_SALT

        //console.log(decodedToken);

        return next();

    } catch (error) {
        return response.status(401).json({ message: 'Invalid JWT Token' })
    }
}  

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// routes.js
// Agora em routes.ts, após ter exportado isAuthenticated importa-lo aqui em routes.ts
//se eu quero que uma rota seja privada e que somente tenha acesso com o token então eu insiro a middleware isAuthenticated
import { Router } from "express";
import { auth } from "./auth";
import { isAuthenticated } from "./routes/middleware/isAuthenticated";

const router = Router();

router.post('/auth', auth);
router.post('/newuser', CreateUserController.create);
router.get('/list', isAuthenticated, createProduct.getList); // isAuthenticated é middleware de autenticação

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------