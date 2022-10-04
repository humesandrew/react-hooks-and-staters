import React from 'react';

import "./products.scss";
import { useState, useEffect } from "react";


//we are going to use a hook for fun////////
// import useDocumentTitle from "@rehooks/document-title";




export default function Products() {
    const [cart, setCurrentCart] = useState(0);
// we are setting our state of "cart" to 0 initially, then using the callback function setCurrentCart to change it later//

// useDocumentTitle(`Your cart has ${cart} items.`);
// this hook didnt work, but useEffect did to render a simulatenous change of document title. 

    const incrementCart = () => {
      setCurrentCart(cart + 1);
      console.log(cart);
    };

    const decrementCart = () => {
      if (cart > 0) 
      setCurrentCart(cart - 1);
      console.log(cart);
    };

    const clearCart = () => {
      setCurrentCart(0)
    }
    
    useEffect(() => {
     
      document.title = `Welcome ${window.localStorage.getItem('hooksFirstName')}, your cart contains ${cart} items`
      
    });

    return (
      <div>
   <div className="cart">
    <h2>This is a shopping cart example.</h2>
   Shopping Cart: {cart} total items
   
   
   <div className="product"><span role="img" aria-label="ice cream">🍦</span>
   </div>
        <button onClick={incrementCart}>Add</button> 
        
        <button onClick={decrementCart}>Remove</button>
        <button onClick={clearCart}>Clear</button>
      </div>
      </div>
    )}