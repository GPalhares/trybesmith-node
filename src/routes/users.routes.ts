import express from 'express';
import UsersController from '../controllers/users.controller';

const usersController = new UsersController();

const app = express();
app.use(express.json());
app.post('/login', usersController.login);
app.post('/users', usersController.createUser);

export default app;
