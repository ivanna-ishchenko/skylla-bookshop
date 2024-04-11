import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CartState } from "./cartSlice";

export interface RootState {
  cart: CartState;
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
