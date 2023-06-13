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
        keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),// keys: env.array('APP_KEYS'), substituir essa
    },
    webhooks: {
        populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
});

//-------------------------------------------------------------------------------------

//admin.js

// inserir os tokens como esta inserido em .env:

// inserir os textos ADMIN_JWT_SECRET e API_TOKEN_SALT TRANSFER_TOKEN_SALT dentro do env, como no exemplo:
ADMIN_JWT_SECRET=i51VlaadGZ+URimu1bSmcw==
API_TOKEN_SALT=KZoLNUewEYFz8b9m6TGIIg==
TRANSFER_TOKEN_SALT=cmk5p3UVHZaV4Xd0K5dobA==

//
module.exports = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', 'i51VlaadGZ+URimu1bSmcw'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT', 'KZoLNUewEYFz8b9m6TGIIg'),
    },
    transfer: {
        token: {
            salt: env('TRANSFER_TOKEN_SALT', 'cmk5p3UVHZaV4Xd0K5dobA'),
        },
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

// Em .Env configurar mysql:
HOST=0.0.0.0
PORT=1337
APP_KEYS=EWgk2S+/CG+AXabmCPRDfQ==,zpQW9IQBcQGWUnc5MGmEmg==,yCWyyzFukuwk02NVKumHgA==,P+w/IXoE2/SacDJD0OLbkw==
API_TOKEN_SALT=KZoLNUewEYFz8b9m6TGIIg==
ADMIN_JWT_SECRET=i51VlaadGZ+URimu1bSmcw==
TRANSFER_TOKEN_SALT=cmk5p3UVHZaV4Xd0K5dobA==
# Database
DATABASE_CLIENT=mysql
DATABASE_HOST=mysql-ag-br1-16.hospedagemelastica.com.br
DATABASE_PORT=3306
DATABASE_NAME=wyvfyl_dbsisgeo
DATABASE_USERNAME=wyvfyl_sisgeo
DATABASE_PASSWORD=sisgeo81574136
DATABASE_SSL=false
JWT_SECRET=jR+Tbes6Uk35s7ZHvRYfYw==



