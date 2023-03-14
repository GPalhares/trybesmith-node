import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product, NewProduct } from '../interfaces/product.interface';

class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createProduct(product: Product): Promise<Product> {
    const { name, amount } = product;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
      [name, amount],
    );
    const { insertId: id } = result;

    const newProduct: NewProduct = { id, name, amount };
    return newProduct;
  }

  async getAllProducts(): Promise<Product[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    const [rows] = result;
    return rows as Product[];
  }
}

export default ProductModel;
