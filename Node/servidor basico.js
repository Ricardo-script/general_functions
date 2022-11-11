import express from 'express';

const app = express();

app.listen(80, () => {
    console.log('local: http://localhost:3000');
});

//---------------------------------------------------------------------
//criar pasta src/server.ts

import express from 'express';
import { router } from './routes';

const server = express();
server.use(express.json());
server.use(router);

server.listen(80, () => {
    console.log('Server running in port 80');
});