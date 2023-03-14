import express from 'express';
import ProductsRoutes from './routes/products.routes';
import UsersRoutes from './routes/users.routes';

const app = express();

app.use(ProductsRoutes);
app.use(UsersRoutes);
app.use(express.json());

export default app;
