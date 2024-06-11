import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeIte, updateQuantity } from "./CreateSlice";

const ConferenceEvent = () => {
    const [showItems, setShowItems] = useState(false);
    const venueItems = useSelector((state) => state.venue);

    const dispatch = useDispatch();


    const handleToggleItems = () => {
        setShowItems(!showItems);
    };

    const Cost = ({ totalCosts, ItemsDisplay }) => {
        // Calculate total amount
        const cost = (plant.quantity)*(plant.cost)
    }    

    const handleRemove = () => {
        dispatch(removeItem(plant.name));
    };


    const handleRemove = (plant) => {
        const existingItem = cartItems.find(item => item.name === plant.name);
        if (existingItem) {
            dispatch(updateQuantity({ name: plant.name, quantity: existingItem.quantity + 1 }));
        }
    };

    const handleUpdate = (plant) => {
        const existingItem = cartItems.find(item => item.name === plant.name);
        if (existingItem) {
            dispatch(updateQuantity({ name: plant.name, quantity: existingItem.quantity + 1 }));
        }
    };


    return (
        <div>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>Cost: {item.cost}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: {Cost()}</p>
            <button className=" btn-success" onClick={() => handleIncrement(plant)}> &#43; </button>
            <button className=" btn-success" onClick={() => handleDecrement(plant)}> &#43; </button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );


};

export default ConferenceEvent;