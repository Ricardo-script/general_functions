// configurar database => config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'mysql-ag-br1-14.hospedagemelastica.com.br'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'jfhmrw_teste'),
      user: env('DATABASE_USERNAME', 'jfhmrw_ricardo'),
      password: env('DATABASE_PASSWORD', '123456'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

//---------------------------------------------------------------------------------------

// server .js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]), // keys: env.array('APP_KEYS'), substituir essa
  },
});

//-------------------------------------------------------------------------------------

//admin.js

// inserir os tokens como esta inserido em .env:

// inserir os textos ADMIN_JWT_SECRET e API_TOKEN_SALT dentro do env, como no exemplo:
secret: env('ADMIN_JWT_SECRET') e salt: env('API_TOKEN_SALT')

//
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'JSARrob0lqy2VTMQUH2e1Q'), 
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '4AXcjsuXHktXMEh1i3a6dw' ),
  },
});

//----------------------------------------------------------------------------------------
//Configurar total de linhas para request:

//config/api.js

module.exports = {
	rest: {
		defaultLimit: 100000,
		maxLimit: 100000,
		withCount: true,
	},
};




