import { Request, Response } from 'express';
import ProductService from '../services/products.service';

import statusCodes from '../statusCodes';

class ProductController {
  service: ProductService;

  constructor(service = new ProductService()) {
    this.service = service;
    this.getAllProducts = this.getAllProducts.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(req: Request, res: Response) {
    const product = req.body;
    const productCreated = this.service.createProduct(product);
    res.status(statusCodes.CREATED).json(productCreated);
  }

  async getAllProducts(_req: Request, res: Response): Promise<void> {
    const products = await this.service.getAllProducts();
    res.status(statusCodes.OK).json(products);
  }
}

export default ProductController;
