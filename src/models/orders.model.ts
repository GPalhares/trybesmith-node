import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  async createOrder(order: Order) {
    const { userId, productsIds } = order;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?);',
      [userId],
    );
    const orderId = result.insertId;

    const allPromises = productsIds.map((productId) => this.connection.execute(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?;',
      [orderId, productId],
    ));
    await Promise.all(allPromises);
     
    const newOrder: Order = { userId, productsIds };
    return newOrder;
  }
}

export default OrderModel;
