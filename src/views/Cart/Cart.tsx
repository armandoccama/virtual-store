// import styles from "./Cart.module.css";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import CartCard from "../../components/CartCard/CartCard";
import CartResume from "../../components/CartResume/CartResume";
import { useEffect, useState } from "react";
// import ICartCard from "../../interfaces/ICartCard";
import Product from "../../interfaces/Product";

function Cart() {
  const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);

  const totalPrice = productsOnCart.reduce((acc, item: Product) => {
    const units = item.units ?? 1;
    acc += units * item.price;
    return acc;
  }, 0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const products = JSON.parse(cart);
      setProductsOnCart(products);
    }
  }, []);

  const updateProductUnits = (productId, newUnits) => {
    const updatedProducts = productsOnCart.map((product: Product) => {
      if (product.id === productId) {
        return { ...product, units: newUnits };
      }
      return product;
    });

    setProductsOnCart(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      <main className="w-full flex flex-col md:flex-row justify-center items-center md:items-start p-[20px]">
        <section className="flex flex-col">
          {productsOnCart.map((each) => (
            <CartCard
              key={each.id}
              product={each}
              updateProductUnits={updateProductUnits}
            />
          ))}
        </section>
        <CartResume price={totalPrice} />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
