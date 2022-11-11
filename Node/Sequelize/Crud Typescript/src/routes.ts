import express from 'express';
import UserController from './controllers/UserController'; // importar classe de controllers
import { auth } from './routes/auth'; // importar auth
import { isAuthenticated } from './routes/middleware/isAuthenticated';
import { secret } from './routes/secret';

const router = express.Router();

//rota de autenticação
router.post('/auth', auth);

//secret
router.get('/secret', isAuthenticated, secret);

router.post('/users', UserController.create);
router.get('/users', isAuthenticated, UserController.findAll);
router.get('/users/:userId', UserController.findOne);
router.put('/users/:userId', UserController.update);
router.delete('/users/:userId', UserController.destroy);

export { router }