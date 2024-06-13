// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import products, { Product } from "../../models/products";
import products from "../../models/products";
// import Truck from "../../assets/img/truck.png";
// import Plane from "../../assets/img/plane.png";
// import styles from "./details.module.css";
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

  return (
    <>
      <NavBar />
      {!product && <Hero first="NOT" second="found" />}
      <main className="w-full flex justify-center items-center p-[20px]">
        <div className="w-full flex flex-wrap justify-between">
          {product && (
            <div id="details" className="w-full flex justify-center flex-wrap">
              <Thumbs product={product} />
              {/* <Thumbs product={product} /> */}
              <Description product={product} />
              <Checkout product={product} />
            </div>
          )}
          <div className="w-full flex flex-col justify-center items-center mt-8">
            <h2 className="text-[40px]">Ofertas de la semana</h2>
            <div
              id="product-container"
              className="flex flex-col md:flex-row flex-wrap items-center justify-between w-full lg:w-[1024px]"
            >
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
