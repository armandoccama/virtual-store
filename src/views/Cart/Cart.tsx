// import styles from "./Cart.module.css";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import CartCard from "../../components/CartCard/CartCard";
import CartResume from "../../components/CartResume/CartResume";
import { useEffect, useState } from "react";

function Cart() {
  const [productsOnCart, setProductsOnCart] = useState([]);
  const [totalPrecioCarrito, setTotalPrecioCarrito] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const products = JSON.parse(cart);
      const productsOnCartReduce = products.reduce((acc, item) => {
        if (item.priceTotal) {
          acc += item.priceTotal;
        } else {
          acc += item.price;
        }
        return acc;
      }, 0);
      setProductsOnCart(products);
      setTotalPrecioCarrito(productsOnCartReduce);
    }
    // if (localStorage.getItem("cart")) {
    //   const products = JSON.parse(localStorage.getItem("cart"));
    //   setProductsOnCart(products);
    // }
  }, [productsOnCart]);

  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      <main className="w-full flex flex-col md:flex-row justify-center items-center md:items-start p-[20px]">
        {/* <article className="bg-gray-100 rounded-md p-8 m-2 h-[220px] break-words flex justify-between w-[680px] items-center">
          <img
            className="w-[100px] h-[100px] rounded-[5px]"
            src="https://i.postimg.cc/kX8PKZpq/ipad.jpg"
            alt="ipad"
          />
          <div className="flex flex-col justify-between gap-[2px] w-[340px] h-[100px]">
            <strong className={styles["product-title"]}>iPad Pro 13</strong>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
              - Silver
            </span>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis">
              The iPad Pro 13 is a stunning piece of technology, boasting a
              large 12.9-inch Retina display with ProMotion technology. With
              256GB of storage, this iPad provides ample space for all your
              files, apps, and multimedia content. The sleek and slim design,
              combined with the silver color, gives it a sophisticated look.
              Enjoy seamless connectivity with the WiFi feature. Capture your
              memorable moments with the high-quality camera and relive them on
              the impressive screen. Whether you're a professional artist,
              student, or just someone who appreciates cutting-edge technology,
              the iPad Pro 12.9 is a versatile device that meets all your needs.
            </p>
            <input
              className="w-[70px] h-[40px] rounded-[10px] border border-[#eaeaea] p-[5px]"
              type="number"
              name="quantity"
              defaultValue="1"
              min="1"
              id="P7Q8R90"
            />
          </div>
          <strong className={styles["price"]}>AR$ $800000</strong>
        </article> */}
        <section className="flex flex-col">
          {productsOnCart.map((each) => (
            <CartCard key={each.id} product={each} />
          ))}
        </section>
        <CartResume price={totalPrecioCarrito} />
        {/* <div className="bg-gray-100 rounded-[5px] p-[30px] m-[10px] h-[220px] break-words flex justify-between w-[340px] flex-col">
          <div className="flex-grow flex flex-col justify-between">
            <h2 className="flex justify-normal gap-1">
              <span>Resumen</span>
              <span>del</span>
              <span>pedido</span>
            </h2>
            <div className="flex justify-between items-center">
              <h3>Total</h3>
              <strong className={styles["cart-price"]}>$800000</strong>
            </div>
            <small className="pb-[10px]">
              Incluye impuesto PAIS y percepción AFIP.
            </small>
          </div>
          <button
            className="w-full bg-red-500 text-white font-bold border-none h-10 rounded-lg hover:bg-red-600"
            id="buy"
            type="button"
          >
            COMPRAR
          </button>
        </div> */}
      </main>
      <Footer />
    </>
  );
}

export default Cart;
