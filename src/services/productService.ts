import Product from "../interfaces/Product";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('/products.json');
  const data = await response.json();
  return data.products; // Adjust according to the structure of your JSON
};