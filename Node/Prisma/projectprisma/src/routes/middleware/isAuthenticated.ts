import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export const isAuthenticated = (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) { //caso não exista token
        return response.status(401).json({ message: 'JWT Token is missing' });
    }

    const token = authHeader.split(' ')[1]; // da um split no espaço e pega o segundo item [1] 'Bearer ', 'asdfsgsdertreg654g9gfa9se8fwf'

    try {
        const decodedToken = verify(token, `${process.env.JWT_SALT}`);  //verifica se o token é válido (verify é dojsonwebtoken); é o token + a chave secreta process.env.JWT_SALT

        //console.log(decodedToken);

        return next();

    } catch (error) {
        return response.status(401).json({ message: 'Invalid JWT Token' })
    }
}   