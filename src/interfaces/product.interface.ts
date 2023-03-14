interface Product {
  name: string;
  amount: number;
}

interface NewProduct {
  id?: number;
  name: string;
  amount: number;
}

export { Product, NewProduct };
