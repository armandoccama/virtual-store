import { Link } from "react-router-dom";
import styles from "../ProductCard/productCard.module.css";
import Product from "../../interfaces/Product";
// import { useSelector } from "react-redux";

function ProductCard(props: Product) {
  const { id, title, images, colors, price, onsale, discount } = props;

  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  // const store = useSelector((store) => store);
  // console.log(store);

  return (
    <>
      <Link className={styles["product-card"]} to={"/details/" + id} key={id}>
        <img className={styles["product-img"]} src={images[0]} alt={title} />
        <div className={styles["product-info"]}>
          <span className={styles["product-title"]}>{title}</span>
          <span className={styles["product-description"]}>{colors[0]}</span>
          <div className={styles["product-price-block"]}>
            <span className={styles["product-price"]}>{formattedPrice}</span>
            {onsale && (
              <span className={styles["product-discount"]}>
                {discount}% Off
              </span>
            )}
          </div>
          <div className={styles["product-tax-policy"]}>
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
