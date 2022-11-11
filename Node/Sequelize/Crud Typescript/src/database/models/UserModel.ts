import { DataTypes } from "sequelize"; // importar DataTypes, não usar sequelize/types, somente usar sequelize
import { db } from "../db";

export const UserModel = <any>db.define('user', { // dizer qual é a tabela no banco de dados, abrir um obj e inserir o schema
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
    },
}); 