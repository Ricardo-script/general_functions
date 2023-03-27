//---------------------------------------------------------------------------------------------------------------------------
//Por fim, adicione um arquivo next.config.js na raiz do projeto para configurar as variáveis de ambiente:
module.exports = {
  env: {
    NEXT_PUBLIC_MP_PUBLIC_KEY: process.env.NEXT_PUBLIC_MP_PUBLIC_KEY,
    MP_ACCESS_TOKEN: process.env.MP_ACCESS_TOKEN,
  },
};

/*
Este arquivo carrega as variáveis de ambiente do arquivo .env.local no tempo de construção.
*/


//----------------------------------------------------------------------------------------------------------------------------
