import React from 'react';

import "./products.scss";

export default function Products() {
    return (
      <div>
   <div className="cart">
   Shopping Cart: 0 total items
   
   </div>
   <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
        <button>Add</button> <button>Remove</button>
      </div>
    )}