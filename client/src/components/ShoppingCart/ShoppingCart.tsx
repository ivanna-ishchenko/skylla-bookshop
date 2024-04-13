import React from "react";
import "./ShoppingCart.scss";
import CartItem from "./CartItem/CartItem";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { countTotal } from "../../helpers/countTotal";

const ShoppingCart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="total-price">Total Price: ${countTotal(cartItems)}</div>
      </>
    </div>
  );
};

export default ShoppingCart;
