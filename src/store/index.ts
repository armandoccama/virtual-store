import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/products";


const store = configureStore({
  // aqui tendre todos los reductores de 
  //todos los recursos que yo necesite
  reducer:{
    // reductores que tengan datos de usuario
    // users
    products: productReducer
    
  }
})
export type RootState = ReturnType<typeof store.getState>;
//Esto es útil para tener un tipo específico para las acciones que se pueden despachar en la aplicación.
export type AppDispatch = typeof store.dispatch;

export default store