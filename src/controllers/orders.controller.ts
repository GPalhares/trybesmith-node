import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

import statusCodes from '../statusCodes';

class ProductController {
  service: OrdersService;

  constructor(service = new OrdersService()) {
    this.service = service;
    this.getAllOrders = this.getAllOrders.bind(this);
  }

  async getAllOrders(_req: Request, res: Response): Promise<void> {
    const orders = await this.service.getAllOrders();
    res.status(statusCodes.OK).json(orders);
  }
}

export default ProductController;
