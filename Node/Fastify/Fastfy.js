//criar nova pasta
mkdir server

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//abrir pasta:
cd server

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//abrir no vscode: code .

//------------------------------------------------------------------------------------------------------------------------------------------------------------
npm init -y

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//Instalar typescript:
npm i typescript -D

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//instalar types do node
npm i @types/node -D

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//criar o setup - config.json
npx tsc --init

//no arquivo, trocar o target para "target": es2020, o node ja suporta 2020

//------------------------------------------------------------------------------------------------------------------------------------------------------------
// instalar a tsx que automatiza o processo de compilação do código
npm i tsx -D

// ir em package.json e na propriedade "scripts":
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
// apaga o conteudo de "test"
//deixar da seguinte configuração:
"scripts":{
	"dev": "tsx src/server.ts"
}
// logo poderá rodar npm run dev e abrirá o servidor
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//para atualizar sozinho a aplicação toda vez que o projeto sofrer alterações então ir em package.json e na Props "scritps"
//inserir "watch" depois do tsx:
"scripts":{
	"dev": "tsx watch src/server.ts"
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//Instalando o Fastfy

npm i fastify

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//Criar pasta src que ira conter toda a aplicação
//Criar arquivo server.ts:

import fastify from "fastify";

//const app = fastify();
const app = fastify({
	logger: true, // logger: essa propriedade permite que de para ver os logs de tudo oque esta acontecendo na aplicação, erro, requisição e etc,
});


app.listen({ port: 3333 })
	.then(() => {
		console.log("🚀HTTP server running on http://localhost:3333");
	})
	.catch();




//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//post simples
/*
app.post("/hello", () => {
	return { msg: "Hello world" };
});*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// importando router

import fastify, { FastifyInstance } from 'fastify';
import { router } from './routes';

const app: FastifyInstance  = fastify();

app.register(router);


app.listen(3333, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("🚀HTTP server running on http://localhost:3333");
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//routes/users.js

import { FastifyInstance } from 'fastify';

export default function router(app: FastifyInstance) {

  app.get('/users', (request, reply) => {
    reply.send({ message: 'Lista de usuários' });
  });

  app.get('/users/:id', (request, reply) => {
    const userId = request?.params?.id;
    reply.send({ message: `Detalhes do usuário ${userId}` });
  });


}






//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//Outras maneiras***
/* ---

	import Fastify from "fastify";

	async function bootstrap(){   // nome start | ou bootstrap, alguns frameworks o chamam de bootstrap(é a 1ª função a ser executada)
		const fastify = Fastify({
			logger: true,        // essa propriedade permite que de para ver os logs de tudo oque esta acontecendo na aplicação, erro, requisição e etc,
		});

		await fastify.listen({ port: 80});
	}

	bootstrap();

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//criando rotas:

// se a url for http://localhost:80/pools/count, então a endpoint será pools/count:

import Fastify from "fastify";

	async function bootstrap(){   // nome start | ou bootstrap, alguns frameworks o chamam de bootstrap(é a 1ª função a ser executada)
		const fastify = Fastify({
			logger: true,        // essa propriedade permite que de para ver os logs de tudo oque esta acontecendo na aplicação, erro, requisição e etc,
		});
		
		fastify.get('/pools/count', () => { //http://localhost:80/pools/count
			return { count: 0 }
		});

		await fastify.listen({ port: 80});
	}

	bootstrap();

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

*/
