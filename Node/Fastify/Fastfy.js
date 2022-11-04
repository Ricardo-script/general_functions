//criar nova pasta
mkdir server

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//abrir pasta:
cd server

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//abrir no vscode: code .

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//Instalar typescript:
npm i typescript -D

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//criar o setup - config.json
npx tsc --init

//no arquivo, trocar o target para "target": es2020,

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


