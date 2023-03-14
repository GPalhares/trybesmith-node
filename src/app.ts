import express from 'express';
import ProductsRoutes from './routes/products.routes';

const app = express();

app.use(ProductsRoutes);
app.use(express.json());

export default app;
