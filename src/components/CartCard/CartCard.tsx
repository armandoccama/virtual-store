import { useEffect, useRef, useState } from "react";

export default function CartCard({ product }) {
  const {
    id,
    title,
    price,
    colors,
    images,
    description,
    units: initialUnits,
  } = product;

  const unitsRef = useRef(initialUnits);
  const [totalPrice, setTotalPrice] = useState(price * initialUnits);

  const manageUnits = () => {
    const newUnits = Number(unitsRef.current.value);

    const cart = localStorage.getItem("cart");
    const productsOnCart = cart ? JSON.parse(cart) : [];
    const one = productsOnCart.find((each) => each.id === id);

    one.units = newUnits;
    one.priceTotal = price * newUnits; // Actualizar el precio total calculado
    localStorage.setItem("cart", JSON.stringify(productsOnCart));

    setTotalPrice(price * newUnits);
  };

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const productsOnCart = JSON.parse(cart);
      const productInCart = productsOnCart.find((each) => each.id === id);
      if (productInCart) {
        unitsRef.current.value = productInCart.units;
        setTotalPrice(productInCart.priceTotal); // Usar el precio total calculado desde localStorage
      }
    }
  }, [id, price]);

  return (
    <article className="w-[340px] lg:w-[680px] md:h-[220px] flex justify-between items-center rounded-md px-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]">
      <img
        className="hidden lg:inline-block w-[140px] h-[140px] rounded-sm"
        src={images[0]}
        alt={title}
      />
      <div className="flex flex-col justify-start flex-grow">
        <div className="lg:h-[120px] flex flex-col justify-between flex-grow p-[10px]">
          <span>
            <strong className="block lg:inline-block text-[16px]">
              {title}
            </strong>
            <span className="block lg:inline-block text-[12px]">
              - {colors[0]}
            </span>
          </span>
          <p className="hidden lg:inline-block w-[340px] truncate text-[12px]">
            {description}
          </p>
          <input
            className="w-[70px] rounded-sm border-1 border-[#eaeaea] p-[5px] pl-[15px] text-[14px]"
            type="number"
            name="quantity"
            defaultValue={initialUnits}
            ref={unitsRef}
            onChange={manageUnits}
            min="1"
            id={id}
          />
        </div>
        <strong className="text-start lg:text-end text-[14px] px-[10px]">
          AR$ ${totalPrice ? totalPrice : price}
        </strong>
      </div>
    </article>
  );
}