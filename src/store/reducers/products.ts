import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/products";

const {captureText,calculateTotal,calculateQuantity} = productsActions

// cada cambio tiene que actualizar este estado
const initialState ={
  text:"",
  total: 0,
  totalQuantity:0
}

const productReducer = createReducer(
  initialState,
  // cada accion es un caso que tiene que actualizar el estado
  (build)=> build.addCase(
    captureText,
    // este calback se va encargar de reducir(acaulizar o modificar datos) los estados globales
    (state,action)=>{
      const newState = {
        ...state,
        text: action.payload.text
      }
      return newState
    }
  )
  .addCase(
    calculateTotal,
    (state, action) => {
       const products = action.payload.products
       const subtotals = products.map((each) => each.price * each.units);
       const total = subtotals.reduce((acc: number, val: number) => acc + val,0);
       const newState = {
          ...state,
          total,
       };
       return newState;
    }
 )
 .addCase(
  calculateQuantity,
  (state, action) => {
     const products = action.payload.products
     const totalQuantity = products.reduce((acc, each) => acc + each.units, 0);
     const newState = {
        ...state,
        totalQuantity,
     };
     return newState;
  }
)
)
export default productReducer