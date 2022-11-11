import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization.replace('Bearer ', '');
        const validToken = verify(token, process.env.JWT_SALT); //verifica se o token é válido
        req['tokenData'] = validToken; //se o token é valido passar ele para o tokenData no secret
        next();
    } catch (error) { // se não resolver o token matar a matar a requisisao
        res.status(401).json("Unauthorized.");
    }
}   