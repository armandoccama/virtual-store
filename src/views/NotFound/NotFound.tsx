import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <Hero first="404" second="not found" />
      <Footer />
    </>
  );
};

export default NotFound;
