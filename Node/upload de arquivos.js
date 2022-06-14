/* 
	1. Instalar: yarn add multer
	2. Instalar types como dev: yarn add @types/multer -D
	3. Dentro de src criar uma pasta chamada uploads

*/

//---------------------------------------------------------------------------------------------------------
// Dentro da pasta src criar uma pasta chamada config
// Dentro de config criar o arquivo multer.ts

import { Options, diskStorage } from 'multer'
import { resolve } from 'path'
import { randomBytes } from 'crypto'

export const multerConfig = {
  dest: resolve(__dirname, '..', '..', 'uploads'),// '..' -> sai da pasta config [nessa estrutura basta sair de uma pasta que ja encontra uploads]
  storage: diskStorage({
    destination: (request, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'))
    },
    filename: (request, file, callback) => {
      randomBytes(16, (error, hash) => {
        if (error) {
          callback(error, file.filename)
        }
        const filename = `${hash.toString('hex')}.png`
        callback(null, filename)
      })
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB     // limita o tamanho do arquivo que se poder fazer o upload
  },
  fileFilter: (request, file, callback) => {
    const formats = [
      'image/jpeg',
      'image/jpg',
      'image/png'
    ];

    if (formats.includes(file.mimetype)) {
      callback(null, true)
    }  else {
      callback(new Error('Format not accepted'))
    }
  }
} as Options

//---------------------------------------------------------------------------------------------------------

// **** Dentro de src criar uma pasta chamada uploads

//---------------------------------------------------------------------------------------------------------
// No arquivo routes.ts 
// inserir a função como middlere => multer(multerConfig).single('file'):

import { Router, Request, Response, RouterOptions } from 'express';
import { multerConfig } from './config/multer'
import multer from 'multer';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Code83' })
})

routes.post('/upload', multer(multerConfig).single('file'), (request: Request, response: Response) => {
    
    console.log(request.file)
    
    return response.json({ message: 'Imagem enviada' })
})

export default routes;

//---------------------------------------------------------------------------------------------------------

//No insominia, com tipo POST e body Multipart Form 
// inserir o endereço e enviar dessa forma:

 New name			                		value: tipo file
 
 file ('file é o mesmo nome da single')		teste.png
 

 // enviar SEND
 // o arquivo deverá ser savo dentro da pasta uploads
 
//---------------------------------------------------------------------------------------------------------

//exemplo de model
import { DataTypes } from "sequelize"; // importar DataTypes, não usar sequelize/types, somente usar sequelize
import { db } from "../db";

export const UserModel = <any>db.define('user', { // dizer qual é a tabela no banco de dados, abrir um obj e inserir o schema
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
    },
    foto: { // ira conter a imagem
        type: DataTypes.STRING
    }
}); 
//--------------------------------------------------------------------------------------------------------------------------------------
// exemplo de controller:

async create(req:Request , res:Response){
	const { nome, email, idade } = req.body; //criar uma desestruturação dos campos que estão na models
	
	const foto = req.file.path; // path é o caminho para ver a imagem
	console.log('arquivo', req.file.path);
	
	const user = await UserModel.create({
		nome,
		email,
		idade,
		foto
	});
	return res.status(201).json(user);
}
//--------------------------------------------------------------------------------------------------------------------------------------
//Em routes:
import express from 'express';
import UserController from './controllers/UserController'; // importar classe de controllers
import { multerConfig } from './config/multer';
import multer from 'multer';

router.post('/users', multer(multerConfig).single('file'), UserController.create);

export { router }


