import express from 'express';
import ProductsController from '../controllers/products.controller';

const productsController = new ProductsController();

const app = express();
app.use(express.json());

app.post('/products', productsController.createProduct);
app.get('/products', productsController.getAllProducts);

export default app;
