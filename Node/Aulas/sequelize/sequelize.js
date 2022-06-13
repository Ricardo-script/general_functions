
//instalando sequelize:


 // npm install sequelize || yarn add sequelizes
 
 npm install sequelize-cli -D || yarn add sequelize-cli -D // -D para instalar como dependencia de desenvolvimento apenas
 
 // para enchegar todos os comandos do sequelize: yarn sequelize -h , para listar todos os comandos
 
//-----------------------------------------------------------------------------------------------------------------------

//Configurando o Sequelize no projeto
//Antes de começar a configurar o Sequelize no projeto devemos iniciá-lo, ou seja, criar os arquivos iniciais de configuração, e para isso basta executar o comando:

npx sequelize init
//ou
yarn sequelize init

//Esse processo deve criar alguns arquivos no projeto, como a pasta config, migrations, models e seeders.

//----------------------------------------------------------------------------------------------------------------------

//A primeira coisa que vamos fazer é renomear o arquivo config/config.json para config/database.js e alterar seu conteúdo para:

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};


//--------------------------------------------------------------------------------------------------------------------------------
/*

Feita a configuração acima vamos criar duas pastas na raiz do projeto, a pasta database e a pasta app, com elas criadas mova as 
pastas migrations e seeders para dentro de database e a pasta models para dentro de app, a estrutura deve ficar assim:

/--NodeSequelize
/----app
/------models
/--------index.js
/----config
/------database.js
/----database
/------migrations
/------seeders
/----node_modules
/----.editorconfig
/----.eslintrc
/----.gitignore
/----index.js
/----package.json
/----yarn.lock ou package.lock.json

*/
//----------------------------------------------------------------------------------------------------------------------------------

//O próximo passo é configurar o Sequelize para encontrar os arquivos nas pastas pra onde os movemos, para isso na raiz do projeto 
//crie um arquivo .sequelizerc e insira nele o conteúdo:

const path = require('path');

module.exports = {
  'config': path.resolve('config', 'database.js'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('database', 'seeders'),
  'migrations-path': path.resolve('database', 'migrations'),
};

//--------------------------------------------------------------------------------------------------------------------------------------------------

// instalar o postgree
yarn add pg

yarn add pg-hstore

//--------------------------------------------------------------------------------------------------------------------------------------------------
//Criando modelo e migration ao mesmo tempo
/*Depois de configurar corretamente o arquivo de configuração da CLI, você estará pronto para criar sua primeira migração. É tão simples quanto executar um comando simples.

Usaremos o model:generatecomando. Este comando requer duas opções:

name: o nome do modelo;
attributes: a lista de atributos do modelo.
Vamos criar um modelo chamado User.*/

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

/*Isso vai:

Crie um arquivo de modelo userna modelspasta;
Crie um arquivo de migração com o nome como XXXXXXXXXXXXXX-create-user.jsna migrationspasta.
Nota: Sequelize usará apenas arquivos de modelo, é a representação da tabela. Por outro lado, o arquivo de migração é uma mudança nesse modelo ou mais 
especificamente nessa tabela, utilizada pela CLI. Trate as migrações como um commit ou um log para alguma mudança no banco de dados.

Executando 
Até esta etapa, não inserimos nada no banco de dados. Acabamos de criar o modelo e os arquivos de migração necessários para nosso primeiro modelo, User. 
Agora, para realmente criar essa tabela no banco de dados, você precisa executar o db:migratecomando.*/

npx sequelize-cli db:migrate

/*Este comando executará estas etapas:

Garantirá uma tabela chamada SequelizeMetano banco de dados. Esta tabela é usada para registrar quais migrações foram executadas no banco de dados atual
Comece a procurar os arquivos de migração que ainda não foram executados. Isso é possível verificando a SequelizeMetatabela. Nesse caso, ele executará a 
XXXXXXXXXXXXXX-create-user.jsmigração, que criamos na última etapa.
Cria uma tabela chamada Userscom todas as colunas conforme especificado em seu arquivo de migração.
Desfazendo 
Agora nossa tabela foi criada e salva no banco de dados. Com a migração, você pode reverter para o estado antigo apenas executando um comando.

Você pode usar db:migrate:undo, este comando reverterá a maior parte da migração recente.

npx sequelize-cli db:migrate:undo*/


//========================================================================================================================================================
//========================================================================================================================================================

//E para criar nossa primeira migration, a de Usuário, basta executar:

npx sequelize migration:create --name=create-users
//ou
yarn sequelize migration:create --name=create-users

//--------------------------------------------------------------------------------------------------------------------------------------------------
//Assim que o comando for executado deve ser criado na sua pasta migrations um arquivo, se você abri-lo verá uma estrutura com duas funções,
//a up, que é a função que indica o que modificar no banco de dados quando executarmos a migration e a down, que funciona como um rollback, 
//ou seja, tudo que for feito na up deve ser desfeito na down.

//O arquivo de migration limpo e configurado para criar nossa tabela de Usuário ficou assim:

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};

/*



*/

//------------------------------------------------------------------------------------------------------------------------------------------------------
//Nesse ponto podemos testar se está tudo funcionando corretamente executando o comando:

yarn sequelize db:migrate
//ou
npx sequelize db:migrate

//É bem provável que apareça um erro no seu terminal ao tentar executar o comando acima, isso se dá pelo fato de o Sequelize precisar de um pacote específico
//do banco de dados que você definiu no arquivo config/database.js, como estamos usando o MySQL precisamos instalar o pacote mysql2, faça isso com o comando:

npm install mysql2
// ou
// yarn add mysql2
//Após a instalação execute novamente o comando db:migrate e dessa vez tudo deve funcionar, para verificar abra o seu banco de dados e verifique se no database
//crud_sequelize foram criadas as tabelas SequelizeMeta e Users, a tabela SequelizeMeta que foi criada guarda informações sobre as migrations que já foram executadas,
//para que na próxima execução ele execute apenas o que houver de novo, e não tudo do começo.

//----------------------------------------------------------------------------------------------------------------------------------------------------------








