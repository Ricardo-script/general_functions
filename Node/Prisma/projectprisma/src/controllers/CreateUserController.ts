import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import * as bcrypt from 'bcrypt';
import fs from 'fs';

class CreateUserController {
    async create(request: Request, response: Response) {
        const { email, password } = request.body;

        const foto: any = request.file?.path  // path é o caminho para ver a imagem

        const hash = bcrypt.hashSync(password, 5);

        await prismaClient.users.create({
            data: {
                email: email,
                password: hash,
                foto
            }
        })

        return response.status(201).json({ message: `Usuário ${email} criado com sucesso!` });
    }
    //exclui usuário
    async deleteUser(request: Request, response: Response) {

        const { id } = request.params;

        //pega o id do banco referente ao id enviado
        const getUser = await prismaClient.users.findUnique({
            where: {
                id: id
            }
        })

        const deleteUser = await prismaClient.users.delete({
            where: {
                id: id,
            }
        });

        if (deleteUser) {
            const url = '.\\' + getUser?.foto.substring(39);

            fs.unlink(url.toString(), (err) => { //'./src/uploads/0e5eaf985bd5e9722e264a8b12a045ba.png'
                if (err) throw err;
                console.log('path/file.txt was deleted');
            })

            return response.status(204).send();
        }
    }
}

export default new CreateUserController();