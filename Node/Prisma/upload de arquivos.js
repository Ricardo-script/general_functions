//	Prisma
/* 
	1. Instalar: yarn add multer   -> (middlere do express para manipular requisições do tipo multipart/form-data)
	2. Instalar types como dev: yarn add @types/multer -D
	3. Dentro de src criar uma pasta chamada uploads

*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Models
model Users {
    id       String @id @default(uuid())
    email    String
    password String
    foto     String

    @@map("users")
}

//---------------------------------------------------------------------------------------------------------------------------------------
// Dentro da pasta src criar uma pasta chamada config
// Dentro de config criar o arquivo multer.ts


import { Options, diskStorage } from 'multer';
import { resolve } from 'path'; // lib nativa do node
import { randomBytes } from 'crypto'; //lib nativa do node

export const multerConfig = {                         // deve-se criar a pasta uploads antes  
    dest: resolve(__dirname, '..', 'uploads'),//dest: é o destino para onde eu quero enviar os arquivos -> '..' -> sai da pasta config [nessa estrutura basta sair de uma pasta que ja encontra uploads]
    storage: diskStorage({						  //storage
        destination: (request, file, callback) => { // destination é praticamente quase a mesma coisa de dest
            callback(null, resolve(__dirname, '..', 'uploads'))
        },
        filename: (request, file, callback) => {// filename garante que imagens não se sobrepoam criando hash aleatório para dar um nome aleatório ao arquivo
            randomBytes(16, (error, hash) => {
                if (error) {
                    callback(error, file.filename)
                }
                const filename = `${hash.toString('hex')}.png` // transforma o nome do arquivo em hexadecimal contendo letras e numeros // -> const filename = `${hash.toString('hex')}-${file.originalname}`
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
            callback(null, true) // caso o arquivo selecionado esteja dentre os formatos definidos então retorna um callback de sucesso // null o 1º parametro é sempre a resposta de erro, 2º parametro é o true qnd for sucesso
        } else {
            callback(new Error('Format not accepted')) // se algum arquivo não for conforme os formatos definidos então retorna erro
        }
    }
} as Options

//---------------------------------------------------------------------------------------------------------------------------------------

// **** Dentro de src criar uma pasta chamada uploads

//---------------------------------------------------------------------------------------------------------------------------------------
// exemplo de controller:

import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import * as bcrypt from 'bcrypt';

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
}

export default new CreateUserController();

//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

//No insominia, com tipo POST e body Multipart Form 
// inserir o endereço e enviar dessa forma:

 New name			                		value: tipo file
 
 file ('file é o mesmo nome da single')		teste.png
 

 // enviar SEND
 // o arquivo deverá ser savo dentro da pasta uploads
 
//--------------------------------------------------------------------------------------------------------------------------------------
import { Router } from "express";
import CreateUserController from "./controllers/CreateUserController";
import multer from "multer";
import { multerConfig } from "./config/multer";

const router = Router();

router.post('/auth', auth);
router.post('/newuser', multer(multerConfig).single('file'), CreateUserController.create); // multer recebe como parametro as suas configurações, que esta em config/multer.ts
// single é para upload de um unico arquivo, recebe como parametro o nome do campo client ('file') que ira conter o arquivo

export { router };





