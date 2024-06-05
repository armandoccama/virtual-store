import styles from "./description.module.css";

function Description({ product }) {
  return (
    <div className={styles["product-description-block"]}>
      <h1 className={styles["product-title"]}>{product.title}</h1>
      <form className={styles["product-selector"]}>
        <fieldset className={styles["product-fieldset"]}>
          <label className={styles["product-label"]} htmlFor="color">
            Color
          </label>
          <select className={styles["product-select"]} id="color">
            {product.colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </fieldset>
      </form>
      <div className={styles["product-description"]}>
        <span className={styles["product-label"]}>Descripción</span>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Description;
