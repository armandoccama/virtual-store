import { useEffect, useState } from "react";

export default function CartResume({ price }) {
  const [totalPrecioCarrito, setTotalPrecioCarrito] = useState(0);

  useEffect(() => {
    // Obtener el contenido del carrito del localStorage
    const cart = localStorage.getItem("cart");

    // Parsear el contenido del carrito a un array de productos
    const parsedCart = JSON.parse(cart);

    // Utilizar el método reduce para transformar el array de productos
    const productsOnCartReduce = parsedCart.reduce((acc, item) => {
      // Sumar el valor de la propiedad precioTotal de cada objeto al acumulador
      acc += item.priceTotal;
      // Devolver el acumulador para la próxima iteración
      return acc;
    }, 0);

    // Establecer el total de precio del carrito en el estado
    setTotalPrecioCarrito(productsOnCartReduce);
  }, []);
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
          <strong>${totalPrecioCarrito}</strong>
        </div>
        <small className="pb-[10px]">
          Incluye impuesto PAIS y percepción AFIP.
        </small>
      </div>
      <button
        className="w-full h-[40px] bg-[#ff3b3c] text-white font-bold border-0 rounded-md"
        id="buy"
        type="button"
      >
        COMPRAR
      </button>
    </div>
  );
}
