import { ICartItem } from "../types";

export const countTotal = (cartItems: ICartItem[]) =>
  cartItems
    .reduce((total, item) => {
      if (item.quantity >= 1 && item.quantity <= 100) {
        return total + item.quantity * item.price;
      } else {
        return total;
      }
    }, 0)
    .toFixed(2);
