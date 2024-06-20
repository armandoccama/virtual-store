import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartResume() {
  const navigate = useNavigate();

  const total = useSelector((store) => store.products.total);
  console.log(total);

  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(total);

  const clearCart = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="w-[340px] h-[220px] flex flex-col justify-between rounded-md p-[30px] m-[10px] bg-[#f2f2f2]">
      <div className="flex-grow flex flex-col justify-between">
        <h2 className="flex justify-normal gap-2 text-[20px] font-bold">
          <span>Resumen</span>
          <span>del</span>
          <span>pedido</span>
        </h2>
        <div className="flex justify-between items-center">
          <h3>Total</h3>
          <strong>${formattedPrice}</strong>
        </div>
        <small className="pb-[10px]">
          Incluye impuesto PAIS y percepción AFIP.
        </small>
      </div>
      <button
        className="w-full h-[40px] bg-[#ff3b3c] text-white font-bold border-0 rounded-md"
        id="buy"
        type="button"
        onClick={clearCart}
      >
        COMPRAR
      </button>
    </div>
  );
}
