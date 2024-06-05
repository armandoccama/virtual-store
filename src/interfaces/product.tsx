export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  // Añade otros campos según la estructura de tus datos
}

export interface ProductFetchResult {
  products: Product[];
  loading: boolean;
}
