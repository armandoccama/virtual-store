// import styles from "./description.module.css";

function Description({ product }) {
  return (
    <div className="w-[340px] p-[10px] m-[10px] flex flex-col">
      <h1 className="text-[28px] font-bold mt-0 text-wrap">{product.title}</h1>
      <form className="mt-[30px]">
        <fieldset className="border-0 p-0 flex flex-col">
          <label className="text-[12px] font-bold" htmlFor="color">
            Color
          </label>
          <select
            className="w-full h-[40px] bg-white rounded-[10px] border-1 border-[#eaeaea] border-2 m-0 mt-[10px] p-[10px]"
            id="color"
          >
            {product.colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </fieldset>
      </form>
      <div className="mt-[30px]">
        <span className="text-[12px] font-bold">Descripción</span>
        <p className="text-[13px]">{product.description}</p>
      </div>
    </div>
  );
}

export default Description;
