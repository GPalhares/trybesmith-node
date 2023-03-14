import Product from '../interfaces/product.interface';
import ProductModel from '../models/products.model';
import connection from '../models/connection';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async createProduct(product: Product) {
    return this.model.createProduct(product);
  }

  async getAllProducts(): Promise<Product[]> {
    const products = await this.model.getAllProducts();
    return products;
  }
}

export default ProductService;
