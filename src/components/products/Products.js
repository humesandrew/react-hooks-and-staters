import React from 'react';

import "./products.scss";
import { useState, useEffect } from "react";


//we are going to use a hook for fun////////
// import useDocumentTitle from "@rehooks/document-title";




export default function Products() {
    const [cart, setCurrentCart] = useState(0);
// we are setting our state of "cart" to 0 initially, then using the callback function setCurrentCart to change it later//

// useDocumentTitle(`Your cart has ${cart} items.`);

    const incrementCart = () => {
      setCurrentCart(cart + 1);
      console.log(cart);
    };

    const decrementCart = () => {
      setCurrentCart(cart - 1);
      console.log(cart);
    };
    
    useEffect(() => {
      document.title = `Your cart contains ${cart} items`
    });

    return (
      <div>
   <div className="cart">
    <h2>Shopping Cart Example</h2>
   Shopping Cart: {cart} total items
   
   
   <div className="product"><span role="img" aria-label="ice cream">🍦</span>
   </div>
        <button onClick={incrementCart}>Add</button> <button onClick={decrementCart}>Remove</button>
      </div>
      </div>
    )}