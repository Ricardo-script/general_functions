import { Request, Response } from 'express';
import { prisma } from '../database/prisma';

class UserController {
	async createUser(req: Request, res: Response): Promise<Response> {
		try {
			const { name, email } = req.body;

			if (typeof name !== 'string') {
				return res.status(400).json({ message: 'O nome deve ser uma string.' });
			}

			const userExists = await prisma.users.findUnique({ where: { email } });

			if (userExists !== null) {
				return res.status(409).json({ message: 'Usuário existente ' });
			}

			const user = await prisma.users.create({
				data: {
					name,
					email,
				},
			});

			return res.status(201).json(user);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno no servidor', error });
		}
	}
}

export default new UserController();
