import { createAction } from "@reduxjs/toolkit";

const captureText = createAction(
  "captureText",
  // este colback va actuar como intermediaria porque va a recibir un objeto
  // con ciertos datos y se los va a enviar al reductor
  // y el redutor es el encarga de realizar toda la logica necesaria para
  // modificar los estados globales de redux
  (obj)=>{
    return{
      payload: {text: obj.text}
    }
  }
)
const calculateTotal = createAction(
  "calculateTotal",
  (obj) => ({ payload: { products: obj.products } })
);


const productsActions = {captureText,calculateTotal}
export default productsActions