import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import OnSaleCard from "../../components/OnSaleCard/OnSaleCard";
import products from "../../models/products";
import styles from "./OnSale.module.css";

const OnSale = () => {
  const numPerSlice = 4;
  // Definiendo los estados from y to utilizando useState
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(numPerSlice);

  // Filtrar productos con descuento mayor a 0
  const filteredProducts = products.filter((product) => product.discount > 0);

  // Función para manejar la navegación a la página siguiente
  // const handleNext = () => {
  //   if (to < filteredProducts.length) {
  //     const nextFrom = from + 4;
  //     console.log("data nextFrom", nextFrom);
  //     const nextTo =
  //       nextFrom + 4 > filteredProducts.length
  //         ? filteredProducts.length
  //         : nextFrom + 4;
  //     console.log("data nextTo", nextTo);
  //     setFrom(nextFrom);
  //     setTo(nextTo);
  //   }
  // };

  // Función para manejar la navegación a la página anterior
  // const handlePrevious = () => {
  //   if (from > 0) {
  //     console.log("data from", from);
  //     const prevFrom = from - 4 < 0 ? 0 : from - 4;

  //     // const prevTo = prevFrom + 3;
  //     const prevTo =
  //       prevFrom + 4 > filteredProducts.length
  //         ? filteredProducts.length
  //         : prevFrom + 4;
  //     console.log("data prevTo", filteredProducts);
  //     console.log("data prevFrom", prevFrom);

  //     setFrom(prevFrom);
  //     setTo(prevTo);
  //   }
  // };
  console.log("data state", from, to);
  const nextSug = () => {
    if (to < filteredProducts.length) {
      setFrom(from + numPerSlice);
      setTo(to + numPerSlice);
    }
  };

  const prevSug = () => {
    if (from > 0) {
      console.log("data statsse", from, numPerSlice);
      console.log("data statsse2", to, numPerSlice);
      setFrom(from - numPerSlice);
      setTo(to - numPerSlice);
    }
  };

  // console.log("data filter", filteredProducts);
  return (
    <>
      <NavBar />
      <main>
        <div className={styles["onsale-product-container"]} id="products">
          <div className={styles["navigation-buttons-left"]}>
            <button onClick={prevSug} disabled={from <= 0}>
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
          {filteredProducts.slice(from, to).map((product) => {
            // console.log("data product", product);
            return (
              product.onsale && (
                <OnSaleCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.images[0]}
                  colors={product.colors[0]}
                  price={product.price} // Precio con descuento calculado
                  discount={product.discount} // Precio original
                />
              )
            );
          })}
          <div className={styles["navigation-buttons-right"]}>
            <button onClick={nextSug} disabled={to >= filteredProducts.length}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OnSale;
