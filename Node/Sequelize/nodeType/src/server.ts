import express from 'express';
import { db } from './database/db';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(router);

app.listen(3001, async () => {
    await db.sync();
    console.log('local: http://localhost:3001');
});