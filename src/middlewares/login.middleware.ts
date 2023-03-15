import { Request, Response, NextFunction } from 'express';
import statusCodes from '../statusCodes';

import { Login } from '../interfaces/user.interface';

function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body as Login;
  if (!username) {
    const message = '"username" is required';
    return res.status(statusCodes.BAD_REQUEST).json({ message });
  }

  if (!password) {
    const message = '"password" is required';
    return res.status(statusCodes.BAD_REQUEST).json({ message });
  }

  next();
}

export default validateLogin;
