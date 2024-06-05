import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import products from "./models/products";

function Home() {
  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      <main>
        <div className={styles["product-container"]} id="products">
          {products.map((product) => (
            <a
              className={styles["product-card"]}
              href="./details.html"
              key={product.id}
            >
              <img
                className={styles["product-img"]}
                src={product.images[0]}
                alt={product.title}
              />
              <div className={styles["product-info"]}>
                <span className={styles["product-title"]}>{product.title}</span>
                <span className={styles["product-description"]}>
                  {product.colors[0]}
                </span>
                <div className={styles["product-price-block"]}>
                  <span className={styles["product-price"]}>
                    {product.price}
                  </span>
                  {product.onsale && (
                    <span className={styles["product-discount"]}>50% Off</span>
                  )}
                </div>
                <div className={styles["product-tax-policy"]}>
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
