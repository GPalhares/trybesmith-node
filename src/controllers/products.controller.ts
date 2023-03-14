import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import statusCodes from '../statusCodes';

class ProductsController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.createProduct = this.createProduct.bind(this);
  }

  async createProduct(req: Request, res: Response): Promise<void> {
    const product = req.body;
    const productCreated = await this.productService.createProduct(product);
    res.status(statusCodes.CREATED).json(productCreated);
  }
}

export default ProductsController;
