/* 
	1. Instalar: yarn add multer   -> (middlere do express para manipular requisições do tipo multipart/form-data)
	2. Instalar types como dev: yarn add @types/multer -D
	3. Dentro de src criar uma pasta chamada uploads

*/

//---------------------------------------------------------------------------------------------------------
// Dentro da pasta src criar uma pasta chamada config
// Dentro de config criar o arquivo multer.ts

import { Options, diskStorage } from 'multer';
import { resolve } from 'path'; // lib nativa do node
import { randomBytes } from 'crypto'; //lib nativa do node

export const multerConfig = {
  dest: resolve(__dirname, '..', '..', 'uploads'),//dest: é o destino para onde eu quero enviar os arquivos -> '..' -> sai da pasta config [nessa estrutura basta sair de uma pasta que ja encontra uploads]
  storage: diskStorage({						  //storage
    destination: (request, file, callback) => { // destination é praticamente quase a mesma coisa de dest
      callback(null, resolve(__dirname, '..', '..', 'uploads'))
    },
    filename: (request, file, callback) => {// filename garante que imagens não se sobrepoam criando hash aleatório para dar um nome aleatório ao arquivo
      randomBytes(16, (error, hash) => {
        if (error) {
          callback(error, file.filename)
        }
        const filename = `${hash.toString('hex')}.png` // transforma o nome do arquivo em hexadecimal contendo letras e numeros
        callback(null, filename)
      })
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB     // limits: limita o tamanho do arquivo que se poder fazer o upload
  },
  fileFilter: (request, file, callback) => { //função para filtrar e só receber determinados tipos de arquivos, ex jpg, jpeg, png e etc
    const formats = [
      'image/jpeg',
      'image/jpg',
      'image/png'
    ];

    if (formats.includes(file.mimetype)) { 
      callback(null, true) // caso o arquivo selecionado esteja dentre os formatos definidos então retorna um callback de sucesso
    }  else {
      callback(new Error('Format not accepted')) // se algum arquivo não for conforme os formatos definidos então retorna erro
    }
  }
} as Options

//---------------------------------------------------------------------------------------------------------

// **** Dentro de src criar uma pasta chamada uploads

//---------------------------------------------------------------------------------------------------------
// No arquivo routes.ts 
// inserir a função como middlere => multer(multerConfig).single('file'):

import { Router, Request, Response, RouterOptions } from 'express';
import { multerConfig } from './config/multer';
import multer from 'multer';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Code83' })
})

routes.post('/upload', multer(multerConfig).single('file'), (request: Request, response: Response) => { // multer recebe como parametro as suas configurações, que esta em config/multer.ts
																										// single é para upload de um unico arquivo, recebe como parametro o nome do campo ('file') que ira conter o arquivo
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


