import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, ICartItem } from "../types";

export interface CartState {
  items: ICartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IBook>) {
      const book = action.payload;
      if (!state.items.find((item) => item.id === book.id)) {
        const cartItem = {
          id: book.id,
          title: book.volumeInfo.title,
          quantity: 1,
          price: book.saleInfo.listPrice.amount,
        };
        state.items.push(cartItem);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItemQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
