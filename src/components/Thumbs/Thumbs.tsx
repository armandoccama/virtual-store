import { useEffect, useState } from "react";
import styles from "./thumbs.module.css";

function Thumbs({ product }) {
  const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg");

  useEffect(() => setThumb(product.images[0]), [product.id]);

  const handleThumbnailClick = (img) => {
    setThumb(img);
  };

  return (
    <section className={styles["product-images-block"]}>
      <div className={styles["product-images"]}>
        {product.images.map((img, index) => (
          <img
            key={index}
            className={styles["mini-img"]}
            src={img}
            alt={product.title}
            onClick={() => handleThumbnailClick(img)}
          />
        ))}
      </div>
      <img
        className={styles["big-img"]}
        id="big-img"
        src={thumb}
        alt={product.title}
      />
    </section>
  );
}

export default Thumbs;
