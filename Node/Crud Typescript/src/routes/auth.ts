import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";
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
            mensage: 'Usuário não existe!'
        })
    }

    //password vem da req.body e user.password vem do banco [foi colocado como tipo any em Usermodel para funcionar(arrumar isso)]
    if(!(await bcrypt.compare(password, user.password))){
        return res.status(400).json({
            error: true,
            message: 'Senha inválida!'
        });
    }

    const nome = user.nome;


    // se o email do banco for igual email da requisicao então gera o token
    const token = sign(  //passar o payload
       {email}
    , process.env.JWT_SALT, { // depois da virgula inserir um secret, inserido com a variavel de ambiente JWT_SALT
        expiresIn: 120, // dentro podemos inserir algumas propriedades: expiresIn é a qnd de tempo para expirar o token, nesse exemplo 120 segundos
    });

    return res.json({nome, email, token});
}   