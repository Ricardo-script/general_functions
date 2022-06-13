//Instalar ORM sequelize
yarn add sequelize 
//------------------------------------------------------------------------------------------------------------------
// instalar drive postgres
yarn add pg
yarn add pg-hstore
//------------------------------------------------------------------------------------------------------------------
//Configurar o .env:
DATABASE_HOST='localhost'
DATABASE_PORT='5432'
DATABASE_NAME='database'
DATABASE_USER='postgres'
DATABASE_PASS='admin'
//------------------------------------------------------------------------------------------------------------------
//Dentro da pasta src criar uma pasta chamada database, e criar arquivo db.ts
import { Sequelize } from "sequelize"

export const db = new Sequelize(     //usar as configurações do .env
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASS,{      //nesse ponto passar algumas opções
        dialect:'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT // o sinal de + foi inserido pois a porta deve ser do tipo int
    }
);

//------------------------------------------------------------------------------------------------------------------
//Criação das models:
//Dentro da pasta database, criar outra pasta chamada models
//Dentro de models, criar arquivo chamada UserModels.ts(para esse exemplo de User)
//Agora o primeiro passo importar o db que acabou de ser criado na database
import { DataTypes } from "sequelize"; // importar DataTypes, ***não usar sequelize/types, somente usar sequelize
import { db } from "../db";

export const UserModel = db.define('user', { // dizer qual é a tabela no banco de dados, abrir um obj e inserir o schema
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade:{
        type: DataTypes.INTEGER,
    },
});  

//------------------------------------------------------------------------------------------------------------------
//Criar as rotas
//Dentro da pasta src, criar arquivo routes.ts, contendo as rotas:
import express from 'express';

const router = express.Router();

router.post('/users', async () => {});
router.get('/users', async () => {});
router.get('/users/:userID', async () => {});
router.put('/users/:userID', async () => {});
router.delete('/users/:userID', async () => {});

export { router };

//depois de exportar deve importar e dar um app.use(router) em server.ts:
/*import { router } from './routes';
app.use(router);*/
//------------------------------------------------------------------------------------------------------------------
//Sincar o banco de dados para criar as tabelas automaticamente
//Em server.ts, importar o db e dentro da chamada da função do app.listen sincar da seguinte forma:

import express from 'express';
import { db } from './database/db';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, async () => {
    await db.sync();
    console.log('local: http://localhost:3000');
});

//*obs: a chamada em app.listen com sync deve ser asyncrona
//------------------------------------------------------------------------------------------------------------------
//Criar pasta controllers
//Dentro da pasta src, criar a pasta controllers
//Dentro da pasta controllers criar um arquivo UserController(para esse exemplo):
//Nesse tipo de aquivo para controllers trabalhar com classes como no exemplo:
/* 
findAll: buscar todos;
findOne: busca um;
create: cria um;
update: altera;
destroy: excluir
*/
import { Request, Response } from "express"; // typescript trabalha com tipagem

class UserController { // criar as funções
    async findAll(req:Request , res:Response){}
    async findOne(req:Request , res:Response){}
    async create(req:Request , res:Response){}
    async update(req:Request , res:Response){}
    async destroy(req:Request , res:Response){}
}
export default new UserController();

// Agora inserir as funções de controle em suas devidas rotas, no arquivo routes.ts:
import express from 'express';
import UserController from './controllers/UserController'; // importar classe de controllers

const router = express.Router();

router.post('/users', UserController.create);
router.get('/users', UserController.findOne);
router.get('/users/:userID', UserController.findAll);
router.put('/users/:userID', UserController.update);
router.delete('/users/:userID', UserController.destroy);

export { router }

//------------------------------------------------------------------------------------------------------------------

// Criando dados:
// em UserController criar importar a model criada UserModel:
// agora para criar o banco de dados é só dar yarn dev
import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";

class UserController { // criar as funções

//CREATE
async create(req:Request , res:Response){
	const { email, nome, idade } = req.body; //criar uma desestruturação dos campos que estão na models
	const user = await UserModel.create({
		email,
		nome,
		idade,
	});
	return res.status(201).json(user);
}

//FINDALL
 async findAll(req:Request , res:Response){
	const users = await UserModel.findAll();
	return users.length > 0 //se a tabela não estiver vazia
	? res.status(200).json(users) 
	: res.status(204).send(); //204 é o no content, se caso o banco estiver vazio
}

//FINDONE 
async findOne(req:Request , res:Response){
	const { userId } = req.params; // userId é o parametro enviado pela url
	const user = await UserModel.findOne({
		where:{
			id: userId,//userId deve esta declarado igual oque foi declado em routes.js
		}
	});
	return user ? res.status(200).json(user) : res.status(204).send(); // "user ?" se o usuário existir então retorna json " : " se não retorna 204
}

//UPDATE
async update(req:Request , res:Response){
	const { userId } = req.params;  // id sera responsável por alterar qualquer propriedade no banco
	await UserModel.update(req.body, { where: { id: userId }});// pode enviar o req.body dentro ao invés de desistruturar
	return res.status(204).send(); //update não retorna nada, mas podemos retornar direto 204 'no content' 
}

//DELETE
async destroy(req:Request , res:Response){
	const { userId } = req.params;  // id sera responsável por deletar qualquer propriedade no banco
	await UserModel.destroy({ where: { id: userId }});
	return res.status(204).send(); //destroy não retorna nada, mas podemos retornar direto 204 'no content' 
}
   
export default new UserController();
