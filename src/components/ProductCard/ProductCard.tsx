import { Link } from "react-router-dom";
import styles from "../ProductCard/productCard.module.css";
function ProductCard(props) {
  const { id, title, image, colors, price, onsale } = props;
  return (
    <>
      <Link className={styles["product-card"]} to={"/details/" + id} key={id}>
        <img className={styles["product-img"]} src={image} alt={title} />
        <div className={styles["product-info"]}>
          <span className={styles["product-title"]}>{title}</span>
          <span className={styles["product-description"]}>{colors}</span>
          <div className={styles["product-price-block"]}>
            <span className={styles["product-price"]}>{price}</span>
            {onsale && (
              <span className={styles["product-discount"]}>50% Off</span>
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
