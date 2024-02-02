// src/middleware/requestLogger.ts

import { Request, Response, NextFunction } from 'express';

const formatTime = (date: Date): string => {
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	return `${hours}:${minutes}:${seconds}`;
};

export default (req: Request, res: Response, next: NextFunction): void => {

	/* 
		console.log(
			`[INFO] ${formatTime(new Date())} Method: ${req.method} ${res.statusCode} Endpoint: ${req.url}`,
		); 
	*/

	// uso do res.statusCode: res.on('finish') esper terminar para enviar o log, assim se pega o statusCode correto
	
	
	res.on('finish', () => {
		console.log(
			`[INFO] ${formatTime(new Date())} Method: ${req.method} ${res.statusCode} Endpoint: ${req.url}`,
		);
	});
	next();
};


//-------------------------------------------------------------------------------------------------------------

//uso:

//src/server.ts

import express from 'express';
import requestLogger from './middleware/requestLogger';
import { router } from './routes';

const server = express();
server.use(express.json());
server.use(requestLogger); // chamar antes de router, pois captura as informações antes de passar para o próximo middleware.
server.use(router);

server.listen(3001, () => {
	console.log('Server running in port 3001');
});

