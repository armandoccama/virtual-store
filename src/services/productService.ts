import { Product } from "../interfaces/product";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('/models/product.json');
  const data = await response.json();
  return data;
};