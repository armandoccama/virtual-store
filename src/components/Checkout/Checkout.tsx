export default Checkout;
import { useEffect, useRef, useState } from "react";
import styles from "./checkout.module.css";
import ProductProp from "../../interfaces/ProductProp";
import Product from "../../interfaces/Product";
import productsActions from "../../store/actions/products";
import { useDispatch } from "react-redux";

const { calculateQuantity } = productsActions;

export function Checkout({ product }: ProductProp) {
  const dispatch = useDispatch();

  // const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const [button, setButton] = useState(false);
  const units = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const productsOnCart = localStorage.getItem("cart");
    // let products = [];
    let products: Product[] = [];
    if (productsOnCart) {
      products = JSON.parse(productsOnCart);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const one = products?.find((item: Product) => item.id === product.id);

    if (one) {
      setQuantity(one.units ?? 1);
      setButton(true);
    } else {
      setQuantity(1);
      setButton(false);
    }
  }, [product.id]);

  // const cartItem = localStorage.getItem("cart");
  // if (cartItem === null) {
  //   localStorage.setItem("cart", JSON.stringify([]));
  // }
  const manageCart = () => {
    const productsOnCart = localStorage.getItem("cart");
    let products: Product[] = [];
    if (productsOnCart) {
      products = JSON.parse(productsOnCart);
    }

    const one = products?.find((each: Product) => each.id === product.id);
    if (!one) {
      if (units.current) {
        console.log("dataMass", units.current.value);
        // product.units = quantity;
        product.units = Number(units.current.value);
        products.push(product);
        setButton(true);
      }
    } else {
      products = products?.filter((each: Product) => each.id !== product.id);
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(products));
    dispatch(calculateQuantity({ products }));
  };

  return (
    <div className="w-[340px] p-[10px] m-[10px] flex flex-col">
      <div className="bg-[#ebebeb] p-10 rounded-md">
        <span className="text-[#ff3b3c]">Total:</span>
        <h2 id="price" className="text-[28px] font-bold mt-[10px]">
          $ {(product.price * quantity).toLocaleString()}
        </h2>
        <p className="text-wrap leading-5 text-[14px]">
          Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
          haciendo la solicitud en AFIP.
        </p>
        <ul className="p-0 list-none mb-[30px]">
          <li className="flex my-[15px]">
            <span className="mr-[15px]">
              <img src="/truck.png" alt="Truck" />
            </span>
            <span className="text-wrap leading-5 text-[12px]">
              Agrega el producto al carrito para conocer los costos de envío
            </span>
          </li>
          <li>
            <span className="mr-[15px]">
              <img src="/plane.png" alt="Plane" />
            </span>
            <span className="text-wrap leading-5 text-[12px]">
              Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
              envío normal
            </span>
          </li>
        </ul>
        <div className={styles["checkout-process"]}>
          <div className="flex mb-[10px]">
            <input
              type="number"
              min="1"
              value={quantity}
              ref={units}
              onChange={() => setQuantity(Number(units.current?.value))}
              disabled={button}
              className="h-[40px] rounded-md border-0 w-[60px] mr-[10px] p-[5px] pl-[15px] box-border"
            />
            <button
              type="button"
              className={
                button
                  ? "w-full bg-[#202020] hover:bg-[#404040] text-[14px] text-white font-bold border-0 h-[40px] rounded-md"
                  : "w-full bg-[#ff3b3c] hover:bg-[#ff5151] text-[14px] text-white font-bold border-0 h-[40px] rounded-md"
              }
              onClick={manageCart}
            >
              {button ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
