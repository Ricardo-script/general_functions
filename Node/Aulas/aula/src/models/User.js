
import pkg from 'mongoose';
const { Schema, model } = pkg;

const UserSchema = new Schema({
    email: String,
});

export default model('User', UserSchema); // model é importado de mongoose, 'User' é o nome do arquivo modelo, e UserSchema é a função



