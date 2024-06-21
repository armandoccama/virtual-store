import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import productsActions from "../../store/actions/products";

const { calculateTotal, calculateQuantity } = productsActions;
export default function CartResume() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const total = useSelector((store) => store.products.total);
  console.log(total);

  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(total);

  const handleCompra = () => {
    dispatch(calculateTotal({ products: [] }));
    dispatch(calculateQuantity({ products: [] }));
    localStorage.clear();
    navigate("/");
  };

  const clearCart = () => {
    Swal.fire({
      icon: "warning",
      title: "¡Atención!",
      text: "¿Quieres finalizar la compra?",
      showCancelButton: true,
      confirmButtonText: "Finalizar compra",
      cancelButtonText: "Cerrar",
    }).then((result) => {
      if (result.isConfirmed) {
        handleCompra();
      }
    });
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
