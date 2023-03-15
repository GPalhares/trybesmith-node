import express from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersController = new OrdersController();

const app = express();
app.use(express.json());

app.get('/orders', ordersController.getAllOrders);

export default app;
