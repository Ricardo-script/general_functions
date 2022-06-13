const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const lista = [
    {"id": 1, "Front-end": "Html", "Back-end": "node"},
    {"id": 2, "Front-end": "ReactJs", "Back-end": "node"}
];

//GET
app.get('/listas', (req, res) => {
    return res.status(200).send(lista);
});

app.get('/listas/:id', (req,res) => {
    const { id } = req.params;
    return res.status(200).send(lista[id]);
});

//POST
app.post('/listas', (req,res) => { 
    lista.push(req.body);
    return res.status(200).send(lista);
});

//PUT
app.put('/listas/:id', (req,res) => {
    const { id } = req.params;
    lista[id] = req.body; 
    return res.status(200).send(lista);
});

//DELETE
app.delete('/listas/:id', (req,res) => {
    const { id } = req.params;
    lista.splice(id,1);
    return res.status(200).send(lista);
});

app.listen(80, () => {
    console.log('Local: http://localhost:80');
});