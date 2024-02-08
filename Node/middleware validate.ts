// Middleware de validação:

// src/middleware/validate.ts

import { Request, Response, NextFunction } from 'express';

interface PropertiesSchemaType {
	required?: boolean;
	type?: string;
	format?: string;
	min?: number;
	max?: number;
}

export type Schema = Record<string, PropertiesSchemaType>;

type ValidationFunction = (req: Request, res: Response, next: NextFunction) => void;

const validate = (schema: Schema): ValidationFunction => {
	const validation: ValidationFunction = (req: Request, res: Response, next: NextFunction) => {
		const { body } = req;
		const errors: string[] = [];

		const isValidEmail = (email: string): boolean => {
			// Implement your email validation logic here
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		};

		// body[item] verifica se alguma propriedade enviada do body contem em alguma propriedade do schema, se não tiver ele retorna undefined
		// o item pega os nomes da chaves de schema

		Object.keys(schema).forEach(item => {
			const itemSchema = schema[item];

			// Se tiver a prop required no schema e na prop da body não vier essa props (undefined) então cai no erro
			if (itemSchema.required !== undefined && body[item] === undefined) {
				errors.push(`O campo ${item} é obrigatório`);
			}

			if (itemSchema.min !== undefined && body[item].length < itemSchema.min) {
				errors.push(`O campo ${item} - tamanho mínimo é ${itemSchema.min}`);
			}

			if (itemSchema.max !== undefined && body[item].length > itemSchema.max) {
				errors.push(`O campo ${item} - tamanho máximo é ${itemSchema.max}`);
			}

			const typeItem = typeof body[item];
			if (itemSchema.type !== undefined && typeItem !== itemSchema.type) {
				errors.push(`Campo ${item} deve estar no formato ${itemSchema.type}`);
			}

			if (itemSchema.format === 'email' && !isValidEmail(body[item] as string)) {
				errors.push(`Campo E-mail está no formato incorreto`);
			}
		});

		if (errors.length > 0) {
			return res.status(400).json({ message: 'Campos inválidos', errors });
		}

		next();
	};

	return validation;
};

export { validate };


//-----------------------------------------------------------------------------------------------------------------------------------

//src/schemas/userSchema.ts

import { Schema } from '../middleware/validate';

export const userSchema: Schema = {
	name: {
		required: true,
		type: 'string',
	},
	password: {
		required: true,
		min: 5,
		max: 12,
	},
	email: {
		format: 'email',
		required: true,
	},
};

//----------------------------------------------------------------------------------------------------------------------------------
// src/router/index.ts

import UserController from '../controller/UserController';
import { Router } from 'express';
import { validate } from '../middleware/validate';
import { userSchema } from '../schemas/userSchema';
const router = Router();

router.post('/createUser', validate(userSchema), UserController.createUser);

export { router };

//----------------------------------------------------------------------------------------------------------------------------------

// src/controller/UserController.ts

import { Request, Response } from 'express';
import { prisma } from '../database/prisma';

class UserController {
	async createUser(req: Request, res: Response): Promise<Response> {
		try {
			const { name, email, password } = req.body;

			const userExists = await prisma.users.findUnique({ where: { email } });

			if (userExists !== null) {
				return res.status(409).json({ message: 'Usuário existente ' });
			}

			const user = await prisma.users.create({
				data: {
					name,
					email,
					password,
				},
			});

			return res.status(201).json(user);
		} catch (error) {
			return res.status(500).json({ message: 'Erro interno no servidor', error });
		}
	}
}

export default new UserController();


//-----------------------------------------------------------------------------------------------------------------------------------
