import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CreateSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => cart.venue);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };

  const handleIncrement = (index) => {
   dispatch(updateQuanity(index));
  };

const SubTotal = ({ totalCosts, ItemsDisplay }) => {
    // Calculate total amount
    const total_amount = totalCosts.cart;

    const handleAddToCart = (plant) => {
        const existingItem = cartItems.find((item) => item.name === plant.name);
        if (existingItem) {
            const updatedItems = cartItems.map((item) =>
                item.name === plant.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCartItems(updatedItems);
        } else {
            setCartItems([...cartItems, { ...plant, quantity: 1 }]);
        }
    };


 const ItemsDisplay = ({ items }) => {
        return <>
           <div className="display_box">
                <div className="header">
                <p className="preheading"><h3>Total Cost of added plants </h3></p>
                </div>
                <div>
                    <h2 id="total-cost" className="price"> ${total_amount} </h2>
                    <div className="render_items">   <ItemsDisplay />  </div>
                </div>
            </div>
      
      <h3>{items.name}</h3>
      <img src={items.image} alt={items.name} />
      <p>Cost: {items.cost}</p>
      <p>Quantity: {items.quantity}</p>
      <p>Subtotal: ${calculateSubtotal()}</p>
      <button className="btn-success" onClick={handleIncrement}>
        Increase Quantity
      </button>
      <button className="btn-danger" onClick={handleDecrement}>
        Decrease Quantity
      </button>
      <button onClick={handleRemove}>Remove</button>
           
        </>
    };
  

  return (
    <div>
      <div className="display_box">
                <div className="header">
                <p className="preheading"><h3>Total Cost of added plants </h3></p>
                </div>
                <div>
                    <h2 id="total-cost" className="price"> ${total_amount} </h2>
                    <div className="render_items">   <ItemsDisplay />  </div>
                </div>
            </div>
      
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
