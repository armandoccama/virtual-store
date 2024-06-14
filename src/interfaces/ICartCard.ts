import Product from "./Product";

export default interface ICartCard {
  product: Product
  updateProductUnits:(productId: number, newUnits: number) => void
}