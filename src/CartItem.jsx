import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CreateSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };

  const calculateSubtotal = () => {
    return item.quantity * parseFloat(item.cost.replace("$", ""));
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.name} />
      <p>Cost: {item.cost}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Subtotal: ${calculateSubtotal()}</p>
      <button className="btn-success" onClick={handleIncrement}>
        Increase Quantity
      </button>
      <button className="btn-danger" onClick={handleDecrement}>
        Decrease Quantity
      </button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
