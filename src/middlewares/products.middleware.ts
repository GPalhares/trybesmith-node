import { Request, Response, NextFunction } from 'express';
import statusCodes from '../statusCodes';

import { Product } from '../interfaces/product.interface';
import Order from '../interfaces/order.interface';

function validateProductName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body as Product;
  if (!name) {
    const message = '"name" is required';
    return res.status(statusCodes.BAD_REQUEST).json({ message });
  }

  if (typeof name !== 'string') {
    const message = '"name" must be a string';
    return res.status(422).json({ message });
  }

  if (name.split('').length < 2) {
    const message = '"name" length must be at least 3 characters long';
    return res.status(422).json({ message });
  }

  next();
}

function validateProductAmount(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { amount } = req.body;
  if (!amount) {
    const message = '"amount" is required';
    return res.status(statusCodes.BAD_REQUEST).json({ message });
  }

  if (typeof amount !== 'string') {
    const message = '"amount" must be a string';
    return res.status(422).json({ message });
  }

  if (amount.split('').length < 2) {
    const message = '"amount" length must be at least 3 characters long';
    return res.status(422).json({ message });
  }

  next();
}

function validateProductsId(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body as Order;
  if (!productsIds) {
    const message = '"productsIds" is required';
    return res.status(statusCodes.BAD_REQUEST).json({ message });
  }

  if (typeof productsIds !== 'object') {
    const message = '"productsIds" must be an array';
    return res.status(422).json({ message });
  }

  if (productsIds.length === 0) {
    const message = '"productsIds" must include only numbers';
    return res.status(422).json({ message });
  }

  next();
}

export default { validateProductName, validateProductAmount, validateProductsId };
