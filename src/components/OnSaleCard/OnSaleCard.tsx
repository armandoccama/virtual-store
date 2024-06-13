import styles from "./OnSaleCard.module.css";
import { Link } from "react-router-dom";

function OnSaleCard({ id, image, title, colors, price, discount }) {
  const onSalePrice = Number(price) * (1 - Number(discount) / 100);

  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  const formattedOnsalePrice = new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(onSalePrice);

  return (
    <Link className={styles["onsale-card"]} to={"/details/" + id} key={id}>
      <img className={styles["onsale-img"]} src={image} alt={title} />
      <div className={styles["onsale-info"]}>
        <span className={styles["onsale-title"]}>{title}</span>
        <span className={styles["onsale-description"]}>{colors}</span>
        <div className={styles["onsale-price-block"]}>
          <span>Desde</span>
          <span className={styles["onsale-original-price"]}>
            PEN$ {formattedPrice}
          </span>
          <div className={styles["onsale-discount-price"]}>
            <span className={styles["onsale-price"]}>
              PEN${formattedOnsalePrice}
            </span>
            <span className={styles["onsale-discount"]}>{discount}% Off</span>
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
