import { Sequelize } from "sequelize"

export const db = new Sequelize(     //usar as configurações do .env
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASS,{      //nesse ponto passar algumas opções
        dialect:'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT // o sinal de + foi inserido pois a porta deve ser do tipo int
    }
);