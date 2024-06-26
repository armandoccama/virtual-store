import { useRef } from "react";
import CartCardProps from "../../interfaces/CartCardProps";
import { useDispatch } from "react-redux";
// import ICartCard from "../../interfaces/ICartCard";
import productsActions from "../../store/actions/products";
import Product from "../../interfaces/Product";
const { calculateTotal, calculateQuantity } = productsActions;

export default function CartCard({
  product,
}: // updateProductUnits,
CartCardProps) {
  const {
    id,
    title,
    price,
    colors,
    images,
    description,
    units: initialUnits,
  } = product;

  const dispatch = useDispatch();
  const unitsToBuy = useRef<HTMLInputElement>(null);

  // const [totalPrice, setTotalPrice] = useState(price * initialUnits);

  const manageUnits = () => {
    const newUnits = Number(unitsToBuy.current?.value);
    const productsOnCart = localStorage.getItem("cart");
    let products: Product[] = [];
    if (productsOnCart) {
      products = JSON.parse(productsOnCart);
    }
    console.log("cantidad product", products);
    const one = products.find((each: Product) => each.id === id);

    if (one) {
      one.units = newUnits;
      localStorage.setItem("cart", JSON.stringify(products));
      dispatch(calculateTotal({ products }));
      dispatch(calculateQuantity({ products }));
    }

    // one.units = newUnits;
    // // one.priceTotal = price * newUnits; // Actualizar el precio total calculado
    // localStorage.setItem("cart", JSON.stringify(productsOnCart));

    // updateProductUnits(id, newUnits);
    // // setTotalPrice(price * newUnits);
  };

  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

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
            ref={unitsToBuy}
            onChange={manageUnits}
            min="1"
            id={id}
          />
        </div>
        <strong className="text-start lg:text-end text-[14px] px-[10px]">
          AR$ ${formattedPrice}
        </strong>
      </div>
    </article>
  );
}
