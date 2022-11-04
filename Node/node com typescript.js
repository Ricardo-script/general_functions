//Iniciar projeto
yarn init -y

//-----------------------------------------------------------------------------------------
// instalar pacote typescript:
yarn add -D typescript

//-----------------------------------------------------------------------------------------
// configurar typescript:
yarn tsc --init
//obs: exemplo simples remover todos os cometários
//alterações:
/* 
trocar: "target": "es2016" para es2017
inserir: "allowJs": true - serve para extensões que ñ possuem typescript, false não permite
remover: "strict": true,  
inserir: "outDir": "./dist", ela serve para build onde os arquivos finais ficarão
resultado:
{
	"compilerOptions": {
		"target": "es2017",
		"module": "commonjs",
		"allowJs": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"skipLibCheck": true,
		"outDir": "./dist"
	}
}
*/
//------------------------------------------------------------------------------------------
//instalar express
yarn add express
//criar pasta src
//------------------------------------------------------------------------------------------
//instalar os tipos
//Com o uso de typescript deve-se instalar tbm os tipos
yarn add -D @types/express
//------------------------------------------------------------------------------------------
// typescript não reconhece o start comum do js então instalar ts-node-dev: obs(o heroku precisa dele sem ser como -D)
yarn add -D ts-node-dev
/*
	Em "scripts":{
		"dev": "ts-node-dev ./src/server.ts"
	}
*/
//------------------------------------------------------------------------------------------
//dotenv:
//Na raiz, criar arquivo chamado .env, instalar:
yarn add -D dotenv
// após instalar inserir em scripts: "-r dotenv/config"
	"scripts":{
		"dev": "ts-node-dev -r dotenv/config ./src/server.ts"
	}
//------------------------------------------------------------------------------------------
//Criar build
//para criar o build ir em scripts, e inserir:
"build": "tsc",
"start": "node -r dotenv/config ./dist/server.js"
// para gerar a build :
yarn build
//------------------------------------------------------------------------------------------
//Criar .gitignore (na raiz)
node_modules
.env
dist
//-------------------------------------------------------------------------------------------