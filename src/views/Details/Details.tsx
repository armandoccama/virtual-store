// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import products, { Product } from "../../models/products";
import products from "../../models/products";
// import Truck from "../../assets/img/truck.png";
// import Plane from "../../assets/img/plane.png";
import styles from "./details.module.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Description from "../../components/Description/Description";
import Checkout from "../../components/Checkout/Checkout";
import ProductCard from "../../components/ProductCard/ProductCard";
import Thumbs from "../../components/Thumbs/Thumbs";
// import { fetchProducts } from "../../services/productService";
// import { Product } from "../../interfaces/product";

function Details() {
  const { id } = useParams();
  const product = products.find((each) => each.id === id);
  const onsale = products.filter((each) => each.onsale);

  // const [product, setProduct] = useState(null);

  // const [product, setProduct] = useState<Product | null>(null); // Anotación de tipo explícita para product
  // const [product, setProduct] = useState<Product[]>([]);
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     // const products = await fetchProducts();
  //     const product = products.find((p) => p.id === id) || null;
  //     console.log("data detalle", product);
  //     setProduct(product);
  //   };

  //   fetchProduct();
  // }, [id]);

  // if (!product) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <NavBar />
      {!product && <Hero first="NOT" second="found" />}
      <main>
        <div className={styles["details-container"]}>
          {product && (
            <div id="details" className={styles["columns-container"]}>
              <Thumbs product={product} />
              {/* <Thumbs product={product} /> */}
              <Description product={product} />
              <Checkout product={product} />
            </div>
          )}
          <div className={styles["sales-block"]}>
            <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
            <div id="product-container" className={styles["product-container"]}>
              {onsale.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.images[0]}
                  colors={product.colors[0]}
                  price={product.price}
                  onsale={product.onsale}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
