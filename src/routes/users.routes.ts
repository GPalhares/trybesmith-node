import express from 'express';
import UsersController from '../controllers/users.controller';
import validateLogin from '../middlewares/login.middleware';

const usersController = new UsersController();

const app = express();
app.use(express.json());
app.post('/login', validateLogin, usersController.login);
app.post('/users', usersController.createUser);

export default app;
