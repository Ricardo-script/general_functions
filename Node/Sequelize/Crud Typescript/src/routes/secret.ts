import { Request, Response } from "express";

export const secret = (req: Request, res: Response) => { //nessa função transformar o token em um string para conseguir visualiza-lo
    res.send(JSON.stringify(req["tokenData"]));
} 