import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();
const productsController = new ProductsController();

router.route('/products').post(productsController.createProduct);

export default router;