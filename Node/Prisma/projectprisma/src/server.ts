import express from 'express';
import { router } from './routes';

const server = express();
server.use(express.json());
server.use(router);

server.listen(80, () => {
    console.log('Server running in port 80');
});