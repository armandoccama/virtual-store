import styles from "./home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import products from "../../models/products";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      <main>
        <div className={styles["product-container"]} id="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.images[0]}
              colors={product.colors[0]}
              price={product.price}
              onsale={product.onsale}
              // url={`/details/${product.id}`}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
