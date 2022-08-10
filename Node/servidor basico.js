import express from 'express';

const app = express();

app.listen(80, () => {
    console.log('local: http://localhost:3000');
});