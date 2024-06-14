import { useEffect, useState } from "react";
import ProductProp from "../../interfaces/ProductProp";
// import styles from "./thumbs.module.css";

function Thumbs(props: ProductProp) {
  const { product } = props;
  const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg");

  useEffect(() => setThumb(product.images[0]), [product.id]);

  const handleThumbnailClick = (img) => {
    setThumb(img);
  };

  return (
    <section className="w-[340px] p-[10px] m-[10px] flex">
      <div className="w-[40px] mr-[10px]">
        {product.images.map((img, index) => (
          <img
            key={index}
            className="w-[40px] h-[30px] mb-[10px] object-cover"
            src={img}
            alt={product.title}
            onClick={() => handleThumbnailClick(img)}
          />
        ))}
      </div>
      <img
        className="w-[280px] h-[280px] object-cover"
        id="big-img"
        src={thumb}
        alt={product.title}
      />
    </section>
  );
}

export default Thumbs;
