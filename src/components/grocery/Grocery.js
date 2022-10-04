import React, { useState, useEffect } from "react";
import "./grocery.scss";

export default function Grocery() {
  const [addGrocery, setGrocery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };



return(
<div className="grocery">
<header><h2>This is a grocery list example.</h2></header>
<div className="grocery-container">
<h2>What item do you need at the grocery store? </h2>
<h3>Total Items in List: </h3>

<form onSubmit={handleSubmit}><input type="text" className="grocery-task" placeholder="Please enter a grocery item."
onChange={(e) => setGrocery(e.target.value)}>

</input>
</form>
<div className="grocery-items">
  {addGrocery}
    
</div>
</div>

</div>
)

}