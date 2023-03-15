import Order from '../interfaces/order.interface';
import OrdersModel from '../models/orders.model';
import connection from '../models/connection';

class OrderService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  async getAllOrders(): Promise<Order[]> {
    const orders = await this.model.getAllOrders();
    return orders;
  }
}

export default OrderService;
