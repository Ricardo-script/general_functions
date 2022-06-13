npm install nodemon -D

//-D, para salvar somente para área de desenvolvimento

//-----------------------------------------------------
//package.json

//inserir "scripts"
// em scripts configurar a chamada nodemon
{
	"name": "aula01",
	"version": "1.0.0",
	"main": "index.js",
	"license": "MIT",
	"scripts": {
		"start": "nodemon ./src/index.js"
	},
	"dependencies": {
		"express": "^4.18.1"
	},
	"devDependencies": {
		"nodemon": "^2.0.16"
	}
}