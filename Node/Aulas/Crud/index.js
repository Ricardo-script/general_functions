const express = require('express'); // Express - facilita a criação de aplicações utilizando o Node
const bodyParser = require('body-parser');//body-parser é pra converter o body da requisição para vários formatos, inclusive json.

const app = express();

app.use(bodyParser.json());//converter o body para json
app.use(bodyParser.urlencoded({extended: false}));// serve para entender e lidar com parâmetros na URL

const dados = ['HTML','CSS', 'Javascript'];

//GET
app.get('/skills', (req, res) => { // req é os dados da requisição(paramentros e etc), e res é o objeto que serve para enviar uma resposta para o usuário qnd acessar a rota
    return res.json(dados);
});

//GET com parametro
app.get('/skills/:index', (req, res) => {
    const { index } = req.params;
    return(res.json(dados[index]));
});

//POST
app.post('/skills', (req, res) => {
    const { name } = req.body;
    // dados.push(name) // dados.push(req.body);
    return res.json(dados);

    //ex de envio do cliente:
    /*{
		"name": "NodeJs"
	}*/
});

//PUT
app.put('/skills/:index', (req,res) => {
    const { index } = req.params;
    const { name } = req.body;
    
    dados[index] = name;
    return res.json(dados);
});

//DELETE
app.delete('/skills/:index', (req, res) => {
    const { index } = req.params;
    dados.splice(index,1);
    return res.json(dados);
});


//acesso: http://localhost/skills
//abrir porta para escutar servidor:
app.listen(80,() => {
    console.log('Escutando na porta 80!');
})