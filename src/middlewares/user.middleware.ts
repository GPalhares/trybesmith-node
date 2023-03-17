import { Request, Response, NextFunction } from 'express';
import statusCodes from '../statusCodes';

import { User } from '../interfaces/user.interface';

function validateUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body as User;
  if (!username) {
    const message = '"username" is required';
    return res.status(statusCodes.BAD_REQUEST).json({ message });
  }

  if (typeof username !== 'string') {
    const message = '"username" must be a string';
    return res.status(422).json({ message });
  }

  if (username.split('').length < 3) {
    const message = '"username" length must be at least 3 characters long';
    return res.status(422).json({ message });
  }

  next();
}

function validateVocation(req: Request, res: Response, next: NextFunction) {
  const { vocation } = req.body;
  if (!vocation) {
    const message = '"vocation" is required';
    return res.status(statusCodes.BAD_REQUEST).json({ message });
  }

  if (typeof vocation !== 'string') {
    const message = '"vocation" must be a string';
    return res.status(422).json({ message });
  }

  if (vocation.split('').length < 3) {
    const message = '"vocation" length must be at least 3 characters long';
    return res.status(422).json({ message });
  }

  next();
}

function validateLevel(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;

  if (level < 1) {
    const message = '"level" must be greater than or equal to 1';
    return res.status(422).json({ message });
  }
  if (!level) {
    const message = '"level" is required';
    return res.status(statusCodes.BAD_REQUEST).json({ message });
  }

  if (typeof level !== 'number') {
    const message = '"level" must be a number';
    return res.status(422).json({ message });
  }

  next();
}

function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!password) {
    const message = '"password" is required';
    return res.status(statusCodes.BAD_REQUEST).json({ message });
  }

  if (typeof password !== 'string') {
    const message = '"password" must be a string';
    return res.status(422).json({ message });
  }

  if (password.split('').length < 9) {
    const message = '"password" length must be at least 8 characters long';
    return res.status(422).json({ message });
  }

  next();
}

export default {
  validateUsername,
  validateVocation,
  validateLevel,
  validatePassword,
};
