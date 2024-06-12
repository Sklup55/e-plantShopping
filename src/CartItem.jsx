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

          <div each-category-plant>
             {items.map((category, index) => (
                    <div key={index}>
                        <h1><div>{category.category}</div></h1>
                        <div className="product-list">
                            {category.items.map((plant, plantIndex) => (
                                <div className="product-card" key={plantIndex}>
                                    <div className="product-title">{plant.name}</div>
                                    <div className="product-title">{plant.cost}</div>
                                    <img className="product-image" src={plant.image} alt={plant.name} />
                              <button className="btn-success" onClick={handleIncrement}> Increase Quantity  </button>
                              <button className="btn-danger" onClick={handleDecrement}> Decrease Quantity </button>
                               <div className="header"> <h3>TOTAL</h3>
                              <h2 id="pre_fee_cost_display" className="price"> ${total_amount} </h2>
                            </div>
                             <button onClick={handleRemove}>Remove</button>
                      
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

          </div>

           
        </>
    };
  

  return (
    <div>

      <div className="display_box">
                <div className="header">
                <p className="preheading"><h3>Total Cart Amount </h3></p>
                  <div>
                    <h2 id="total-cost" className="price"> ${total_amount} </h2>
                    </div>
                </div>
        
                <div>
                    <div className="render_items">  <ItemsDisplay/>  </div>
                </div>
            </div>

    </div>
  );
};

export default CartItem;
