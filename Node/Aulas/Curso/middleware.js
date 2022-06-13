const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'Nodejs', tipo: 'Backend' } 

//CRUD -> Create, Read, Update, Delete

const cursos = ['Node JS', 'JavaScript', 'React Native'];

//Middleware Global
server.use((req, res, next)=>{
  console.log(`URL CHAMADA: ${req.url}`);

  return next();
});

function checkCurso(req, res, next){
  if(!req.body.name){
    return res.status(400).json({ error: "Nome do curso é obrigatorio"});
  }

  return next();
}

function checkIndexCurso(req, res, next){
  const curso = cursos[req.params.index];

  if(!curso){
    return res.status(400).json({ error: "O curso não existe"});
  }

  req.curso = curso;

  return next();
}

server.get('/cursos', (req, res)=> {
  return res.json(cursos);
});


server.get('/cursos/:index', checkIndexCurso, (req, res) => {
   return res.json(req.curso);
});


//Criando um novo curso
server.post('/cursos', checkCurso, (req, res)=> {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

//Atualizando um curso
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res)=>{
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);

});


//Excluindo algum curso
server.delete('/cursos/:index', checkIndexCurso, (req, res)=>{
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.send();
})

server.listen(3000);