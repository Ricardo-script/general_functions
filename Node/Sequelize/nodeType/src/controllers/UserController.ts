import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";
import * as bcrypt from 'bcrypt';

class UserController { // criar as funções

    async findAll(req:Request , res:Response){
        const users = await UserModel.findAll();
        return users.length > 0 //se a tabela não estiver vazia
        ? res.status(200).json(users) 
        : res.status(204).send(); //204 é o no content, se caso o banco estiver vazio
    }

    async findOne(req:Request , res:Response){
        const { userId } = req.params; // userId é o parametro enviado pela url
        const user = await UserModel.findOne({
            where:{
                id: userId,//userId deve esta declarado igual oque foi declado em routes.js
            }
        });
        return user ? res.status(200).json(user) : res.status(204).send(); // "user ?" se o usuário existir então retorna json " : " se não retorna 204
    }

    async create(req:Request , res:Response){
        const { nome, email, password, idade } = req.body; //criar uma desestruturação dos campos que estão na models
        const foto = req.file.path; // path é o caminho para ver a imagem
        console.log('arquivo', req.file.path);

        const generateHash = (password: string) => {
            let pass = password.toString();
            const hash = bcrypt.hashSync(pass, 10);
            password = hash;

            UserModel.create({
                nome,
                email,
                password,
                idade,
                foto
            });
            return res.status(201).json({message: `Usuário ${nome} criado com sucesso!`});
        }
        generateHash(password);
     
    }

    async update(req:Request , res:Response){
        const { userId } = req.params;  // id sera responsável por alterar qualquer propriedade no banco
        await UserModel.update(req.body, { where: { id: userId }});// pode enviar o req.body dentro ao invés de desistruturar
        return res.status(204).send(); //update não retorna nada, mas podemos retornar direto 204 'no content' 
    }

    async destroy(req:Request , res:Response){
        const { userId } = req.params;  // id sera responsável por deletar qualquer propriedade no banco
        await UserModel.destroy({ where: { id: userId }});
        return res.status(204).send(); //destroy não retorna nada, mas podemos retornar direto 204 'no content' 
    }
    
}

export default new UserController();