import styles from "./OnSaleCard.module.css";
import { Link } from "react-router-dom";

function OnSaleCard({ id, image, title, colors, price, originalPrice }) {
  return (
    <Link className={styles["onsale-card"]} to={"/details/" + id} key={id}>
      <img className={styles["onsale-img"]} src={image} alt={title} />
      <div className={styles["onsale-info"]}>
        <span className={styles["onsale-title"]}>{title}</span>
        <span className={styles["onsale-description"]}>{colors}</span>
        <div className={styles["onsale-price-block"]}>
          <span className={styles["onsale-original-price"]}>
            Desde PEN {originalPrice}
          </span>
          <div className={styles["onsale-discount-price"]}>
            <span className={styles["onsale-price"]}>PEN {price}</span>
            <span className={styles["onsale-discount"]}>50% Off</span>
          </div>
        </div>
        <div className={styles["onsale-tax-policy"]}>
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </Link>
  );
}

export default OnSaleCard;
