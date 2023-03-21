import { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import UsersService from '../services/users.service';
import statusCodes from '../statusCodes';

const { JWT_SECRET } = process.env;

class UsersController {
  usersService: UsersService;

  constructor(usersService = new UsersService()) {
    this.usersService = usersService;
    this.createUser = this.createUser.bind(this);
    this.login = this.login.bind(this);
  }

  async login(req: Request, res: Response) {
    const user = req.body;
    const response = await this.usersService.login(user);
    if (response === 'passwordInvalid') {
      return res
        .status(statusCodes.UNAUTHORIZED)
        .json({ message: 'Username or password invalid' });
    }
    const { username, password } = user;
    const token = jwt.sign({ username, password }, JWT_SECRET as Secret, {
      expiresIn: '1h',
    });

    res.status(statusCodes.OK).json({ token });
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user = req.body;
    await this.usersService.createUser(user);
    const { id, email } = user;
    const token = jwt.sign({ id, email }, JWT_SECRET as Secret, {
      expiresIn: '1h',
    });
    res.status(statusCodes.CREATED).json({ token });
  }
}

export default UsersController;
