import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import statusCodes from '../statusCodes';

const { JWT_SECRET } = process.env;

interface AuthRequest extends Request {
  user?: JwtPayload;
}

function validateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET as Secret) as JwtPayload;
    req.user = payload;
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError || err instanceof jwt.JsonWebTokenError) {
      return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
    }
    next(err as Error);
  }
}

export default validateToken;
