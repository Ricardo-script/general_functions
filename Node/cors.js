/* 
	1.yarn add cors
	2.yarn add @types/cors -D
*/

//Configure as opções de CORS

/* 
No arquivo que é o ponto de entrada arquivo é src/index.ts.
Em seu editor de código e abaixo da linha em que você importou express, importe cors também:
*/
import express from 'express';
import cors from 'cors';

const app = express();


const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options)); //Em seguida, passe essas opções para cors



app.use(express.json());

app.listen(80, () => {
  console.log('Local: http://localhost:80');
});

//------------------------------------------------------------------------------------------------------------------------
/* 
import { Request } from "express";
import cors from "cors";

server.use(cors<Request>());

*/

