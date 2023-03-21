import express from 'express';
import OrdersController from '../controllers/orders.controller';
import validateToken from '../middlewares/auth.middleware';
import validadeProduct from '../middlewares/products.middleware';

const ordersController = new OrdersController();

const app = express();
app.use(express.json());

app.get('/orders', ordersController.getAllOrders);
app.post(
  '/orders',
  validateToken,
  validadeProduct.validateProductsId,
  ordersController.createOrder,
);

export default app;
