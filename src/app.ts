import express from 'express';
import ProductsRoutes from './routes/products.routes';
import UsersRoutes from './routes/users.routes';

const app = express();

app.use(ProductsRoutes);
app.use(UsersRoutes);

export default app;
