// import styles from "./home.module.css";
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
      {/* <div className="w-full h-[100px] bg-purple-800 text-white text-center md:w-5/6 m-auto lg:bg-stone-400 lg:text-red-400 xl:w-[1080px]">
        CAJA DE PRUEBA
      </div> */}
      <main className="w-full flex justify-center items-center p-[20px]">
        <div
          className="w-[1080px] flex items-center flex-wrap justify-center md:justify-evenly lg:justify-between"
          id="products"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.images[0]}
              colors={product.colors[0]}
              price={product.price}
              onsale={product.onsale}
              discount={product.discount}
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
