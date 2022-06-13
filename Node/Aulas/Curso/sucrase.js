// instalando sucrase e nodemon de uma vez:
yarn add sucrase nodemon -D
//----------------------------------------------------

//para rodar com sucrase inserir o comando no terminal:
yarn sucrase-node src/server.js
//----------------------------------------------------

// Agora configurar o nodemon:
// em package.json, inserir:

"scripts": {
	"start": "nodemon src/server.js"
}

//logo após, na raiz do projeto criar um arquivo nomeado
//de nodemon.json, e criar o objeto:

{
	"execMap": {
		"js": "node -r sucrase/register"
	}
}
// //execMap vai procurar todos arquivos js
//----------------------------------------------------
