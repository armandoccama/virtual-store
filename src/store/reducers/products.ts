import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/product";

const {captureText} = productsActions

// cada cambio tiene que actualizar este estado
const initialState ={
  text:""
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
)
export default productReducer