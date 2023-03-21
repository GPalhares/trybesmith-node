import { Request, Response } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import OrdersService from '../services/orders.service';
import UsersService from '../services/users.service';
import statusCodes from '../statusCodes';

const { JWT_SECRET } = process.env;

class OrdersController {
  service: OrdersService;

  usersService: UsersService;

  constructor(
    service = new OrdersService(),
    usersService = new UsersService(),
  ) {
    this.service = service;
    this.usersService = usersService;
    this.getAllOrders = this.getAllOrders.bind(this);
    this.createOrder = this.createOrder.bind(this);
  }

  async getAllOrders(_req: Request, res: Response): Promise<void> {
    const orders = await this.service.getAllOrders();
    res.status(statusCodes.OK).json(orders);
  }

  async createOrder(req: Request, res: Response): Promise<void> {
    const token = req.header('Authorization');
    const payload = jwt.verify(
      token as string,
      JWT_SECRET as Secret,
    ) as JwtPayload;
    const { username } = payload;
    const userId = await this.usersService.checkUsernameId(username);
    const order = {
      userId,
      productsIds: [...req.body.productsIds],
    };
    const createdOrder = await this.service.createOrder(order);
    res.status(statusCodes.CREATED).json(createdOrder);
  }
}

export default OrdersController;
