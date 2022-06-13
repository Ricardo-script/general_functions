//Para instalar a CLI do Sequelize:
//"sequelize-cli": "^6.4.1"

npm install --save-dev sequelize-cli
// se der erro instalar - npm install sequelize

//--------------------------------------------------------------------------------------------------------

//Para criar um projeto vazio, você precisará executar o init comando:

// - https://sequelize.org/docs/v6/other-topics/migrations/
npx sequelize-cli init

//Isso criará as seguintes pastas

config - contém o arquivo de configuração, que informa a CLI como se conectar ao banco de dados
models - contém todos os modelos para seu projeto
migrations - contém todos os arquivos de migração
seeders - contém todos os arquivos de semente

//--------------------------------------------------------------------------------------------------------


//Antes de continuar, precisaremos informar à CLI como se conectar ao banco de dados. Para fazer isso, 
//vamos abrir o arquivo de configuração padrão config/config.json. Parece algo assim:

{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

//Observe que a CLI do Sequelize assume o mysql por padrão. Se você estiver usando outro dialeto, 
//precisará alterar o conteúdo da "dialect"opção.

//------------------------------------------------------------------------------------------------------------


//Criando o primeiro modelo (e migração )

//Usaremos o model:generatecomando. Este comando requer duas opções:

//name: o nome da model;
//attributes: a lista de atributos do modelo.

//Vamos criar um modelo chamado User:

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

----------------------------------------------------------------------------------------------------------------------