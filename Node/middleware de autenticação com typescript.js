/* 
	1. Instalar yarn add jsonwebtoken
	2. Instalar os types yarn add -D @types/jsonwebtoken
	3. yarn add bcrypt
	4. yarn add @types/bcrypt
*/
//-------------------------------------------------------------------------------------------------------------------------------------------
// No Arquivo .env criar uma variavel de ambiente:

JWT_SALT=123

//-------------------------------------------------------------------------------------------------------------------------------------------
// depois Criar a Model para usuários
//-------------------------------------------------------------------------------------------------------------------------------------------

//Dentro de src criar uma pasta chamada routes
//Dentro da pasta routes criar um arquivo chamado: auth.ts (rota de autenticação) [auth é usada como uma especie de controller]:
import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel"; // importar a model que contem os dados para autenticação
import { sign } from "jsonwebtoken";
import * as bcrypt from 'bcrypt';

export const auth = async (req: Request, res: Response) => { //dentro da função inserir oque vc quer receber nessa rota de autenticação
    const { email, password } = req.body; // pega o user e password que foi passado no body
    
    const user = await UserModel.findOne({
        where:{
            email: email,
        }
    });
    
    //verifica se o email está no banco de dados
    if(user === null){
        return res.status(400).json({
            error: true,
            mensage: 'Usuário ou a senha incorreta!' //a verificação é apenas do email mas por boas praticas de segurança não deixar claro para quem errou saber que foi apenas o email
        })
    }

    //password vem da req.body e user.password vem do banco [foi colocado como tipo any em Usermodel para funcionar(arrumar isso)] => export const UserModel = <any>db.define('user', {...}
    if(!(await bcrypt.compare(password, user.password))){
        return res.status(400).json({
            error: true,
            message: 'Usuário ou a senha incorreta!' //a verificação é apenas da senha mas por boas praticas de segurança não deixar claro para quem errou saber que foi apenas a senha
        });
    }

    const nome = user.nome;

    // se o email e password do banco forem iguais aos da requisicao então gera o token
	//sign recebe 3 parametros para criar o token, a primeira aqui no exemplo {email} que vai ser enviado junto com o token criptografado
	// o segundo parametro é uma chave, é importante que se use uma chave única, coloque uma chave complexa, pode ser valores aleatórios, 
	// o terceiro parametro é o prazo do token, poder ser por dias inserindo o d, ex:  expiresIn: '7d', ou segundos como no exemplo
	//uma que seja dificil de descobrir (.env process.env.JWT_SALT)
    const token = sign(  //passar o payload
       {email}
    , process.env.JWT_SALT, { // depois da virgula inserir um secret, inserido com a variavel de ambiente JWT_SALT (será o token + a chave secreta)
        expiresIn: 120, // dentro podemos inserir algumas propriedades: expiresIn é a qnd de tempo para expirar o token, nesse exemplo 120 segundos
    });

    return res.json({nome, email, token}); // além do token estou enviando como resposta o nome e também o email que sera exibindo na requisição de auth
}   

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//Dentro da pasta src criar um aquivo chamado routes.ts ('esse exemplo tem uma pasta com o mesmo nome')
import express from 'express';
import { auth } from './routes/auth'; // importar auth

const router = express.Router();

router.post('/auth', auth);

export { router }

//Exportar a const router e importar no arquivo server.js e chamar a função com app.use(router)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//Criar uma rota secret que vai ser uma rota somente para teste para esse exemplo em que eu quero que o usuário só consiga
//acessar se tiver passado o token.
//Dentro da pasta routes criar um arquivo chamado secret.ts
import { Request, Response } from "express";
export const secret = (req: Request, res: Response) => { //nessa função transformar o token em um string para conseguir visualiza-lo
    res.send(JSON.stringify(req["tokenData"]));
} 
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// Agora eno arquivo routes.ts depois de exportado o secret importar em routes.ts:
import express from 'express';
import { auth } from './routes/auth'; // importar auth
import { secret } from './routes/secret'; // importar secret

const router = express.Router();

router.post('/auth', auth);
//secret
router.get('/secret', secret); 

export { router }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//Criar um middleware [o middleware fica entre a chamada da rota e a função de rota : router.get('/secret', isAuthenticated, secret) ]
//Dentro da pasta routes, criar uma pasta chamada middleware, e dentro de middleware criar um arquivo chamada isAuthenticated.ts:
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization.replace('Bearer ', ''); // remove o texto Bearer com espaço: 'Bearer '
        const validToken = verify(token, process.env.JWT_SALT); //verifica se o token é válido (verify é dojsonwebtoken); é o token + a chave secreta process.env.JWT_SALT
        req['tokenData'] = validToken; //se o token é valido passar ele para o tokenData no secret
        next(); //NextFunction chama a proxima função depois de isAuthenticated:  router.get('/secret', isAuthenticated, secret) nesse exemplo o secret
    } catch (error) { // se não resolver o token matar a matar a requisisao
        res.status(401).json("Unauthorized.");
    }
}  

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// Agora em routes.ts, após ter exportado isAuthenticated importa-lo aqui em routes.ts
//se eu quero que uma rota seja privada e que somente tenha acesso com o token então eu insiro a middleware isAuthenticated
import express from 'express';
import { auth } from './routes/auth'; // importar auth
import { secret } from './routes/secret'; // importar secret
import { isAuthenticated } from './routes/middleware/isAuthenticated';

const router = express.Router();

router.post('/auth', auth);
//secret
router.get('/secret', isAuthenticated, secret); //middleware de autenticação
//exemplo:
//router.get('/users', isAuthenticated, UserController.findAll); só consigo listar todos os usuários se o token for válido
export { router }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------




