/**
 * Mantenha este arquivo sincronizado com o código em "Uso de `sequelize.define`"
 * section in /docs/manual/other-topics/typescript.md
 *
 * Não inclua este comentário no arquivo md.
 */
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';

const sequelize = new Sequelize('mysql://root:asd123@localhost:3306/mydb');

// Recomendamos que você declare uma interface para os atributos, para uma verificação de tipo mais rigorosa

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  // Alguns campos são opcionais ao chamar UserModel.create() ou UserModel.build()
  id: CreationOptional<number>;
  name: string;
}

const UserModel = sequelize.define<UserModel>('User', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  name: {
    type: DataTypes.STRING,
  },
});

async function doStuff() {
  const instance = await UserModel.findByPk(1, {
    rejectOnEmpty: true,
  });

  console.log(instance.id);
}