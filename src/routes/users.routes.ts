import express from 'express';
import UsersController from '../controllers/users.controller';
import validateLogin from '../middlewares/login.middleware';
import validateUser from '../middlewares/user.middleware';

const usersController = new UsersController();

const app = express();
app.use(express.json());
app.post('/login', validateLogin, usersController.login);
app.post(
  '/users',
  validateUser.validateUsername,
  validateUser.validateVocation,
  validateUser.validateLevel,
  validateUser.validatePassword,
  usersController.createUser,
);

export default app;
