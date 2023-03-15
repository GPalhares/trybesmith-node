import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UsersService from '../services/users.service';
import statusCodes from '../statusCodes';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

class UsersController {
  usersService: UsersService;

  constructor(usersService = new UsersService()) {
    this.usersService = usersService;
    this.createUser = this.createUser.bind(this);
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user = req.body;
    await this.usersService.createUser(user);
    const { id, email } = user;
    const token = jwt.sign({ id, email }, JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(statusCodes.CREATED).json({ token });
  }
}

export default UsersController;
