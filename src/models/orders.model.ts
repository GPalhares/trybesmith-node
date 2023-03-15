import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAllOrders(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT 
      o.id, 
      o.user_id AS userId, 
      JSON_ARRAYAGG(p.id) AS productsIds 
    FROM 
      Trybesmith.orders o 
      LEFT JOIN Trybesmith.products p ON o.id = p.order_id 
    GROUP BY 
      o.id;
        `,
    );
    const [rows] = result;
    return rows as Order[];
  }
}

export default OrderModel;
