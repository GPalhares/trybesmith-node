import express from 'express';
import ProductsController from '../controllers/products.controller';
import validateProduct from '../middlewares/products.middleware';

const productsController = new ProductsController();

const app = express();
app.use(express.json());

app.post(
  '/products',
  validateProduct.validateProductName,
  validateProduct.validateProductAmount,
  productsController.createProduct,
);
app.get('/products', productsController.getAllProducts);

export default app;
