import React, { ChangeEvent, useState } from "react";
import "./CartItem.scss";
import { ICartItem } from "../../../types";
import { useDispatch } from "react-redux";
import { removeItem, updateItemQuantity } from "../../../store/cartSlice";
import removeIcon from "./remove_icon.svg";

interface IProps {
  item: ICartItem;
}

const CartItem: React.FC<IProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    setQuantity(inputValue);
    dispatch(updateItemQuantity({ id: item.id, quantity: inputValue }));

    if (inputValue >= 1 && inputValue <= 100) {
      setErrorMessage("");
    } else {
      setErrorMessage("Sorry! Number invalid");
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <div className="item-details">
        <div className="row">
          <p>{item.title}</p>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={handleQuantityChange}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <p className="total-price">${(item.price * quantity).toFixed(2)}</p>
      </div>
      <button className="remove-btn" onClick={handleRemoveItem}>
        <img src={removeIcon} alt="Remove" />
      </button>
    </div>
  );
};

export default CartItem;
