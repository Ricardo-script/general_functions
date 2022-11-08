//yarn add fs

// exemplo de exclusão de aquivo com fs:

fs.unlink('./src/uploads/0e5eaf985bd5e9722e264a8b12a045ba.png', (err) => {
	if (err) throw err;
	console.log('path/file.txt foi deletado');
});

//--------------------------------------------------------------------------------------------------------------------------

//Models
model Users {
    id       String @id @default(uuid())
    email    String
    password String
    foto     String

    @@map("users")
}

//--------------------------------------------------------------------------------------------------------------------------
import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import * as bcrypt from 'bcrypt';
import fs from 'fs';

class CreateUserController {
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

        if (deleteUser){
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

//--------------------------------------------------------------------------------------------------------------------------

// Routes:
import { Router } from "express";
import CreateUserController from "./controllers/CreateUserController";

router.delete('/deleteUser/:id', CreateUserController.deleteUser); //---> http://localhost/deleteUser/265bb232-3ad5-49b8-87d2-85ef240653e3

export { router };