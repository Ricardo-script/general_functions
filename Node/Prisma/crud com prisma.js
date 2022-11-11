//Model

model User {
    id    String @id @default(uuid())
    name  String
    email String
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
// controller -> src/controller/Usercontroller.ts

import { json, Request, Response } from "express";
import { prisma } from "../database/prisma";

class UserController {

    //CREATE
    async createUser(req: Request, res: Response) {
        const { name, email } = req.body;

        const users = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        return res.status(201).json(users);
    }

    //GET ALL
    async listAllUser(req: Request, res: Response) {
        const users = await prisma.user.findMany();

        return users.length > 0 // se a tabela não estiver vazia
            ? res.status(200).json(users)
            : res.status(204)
    }

    //GET ONE
    async listOneUser(req: Request, res: Response) {
        const { userId } = req.params;
        const users = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        return users ? res.status(200).json(users) : res.status(204).send(); // "user ?" se o usuário existir então retorna json " : " se não retorna 204
    }

    //UPDATE
    async updateUser(req: Request, res: Response) {
        const { userId } = req.params;
        await prisma.user.update({
            where: {
                id: userId
            },
            data: req.body // enviar o corpo inteiro das alterações realizadas
        });


        return res.status(204).send(); //update não retorna nada, mas podemos retornar direto 204 'no content' 
    }
	
    //DELETE
    async deleteUser(req: Request, res: Response) {
        const { userId } = req.params;
        await prisma.user.delete({
            where: {
                id: userId
            }
        });

        return res.status(204).send();
    }
}

export default new UserController();

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
// rotas -> src/routes/index.ts

import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.post('/user', UserController.createUser);
router.get('/user', UserController.listAllUser);
router.get('/user/:userId', UserController.listOneUser);
router.put('/user/:userId', UserController.updateUser);
router.delete('/user/:userId', UserController.deleteUser);

export { router };