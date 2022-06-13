 /*Para utilizar EcmaScript2015, portanto é necessário adicionar a configuração 
"type": "module" no arquivo package.json. exemplo:*/

{
  "name": "treino",
  "version": "1.0.0",
  "description": "Node com ecmaScript 2015",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./src/index.js"
  },
  "type": "module",// <---
  "author": "Ricardo",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.1",
    "nodemon": "^2.0.16"
  }
}