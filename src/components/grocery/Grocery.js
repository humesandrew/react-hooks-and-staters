import React, { useState, useEffect } from "react";
import "./grocery.scss";


function GroceryItem({ groceryItem, index }) {
  return(
    <div className="groceryItem">
        {groceryItem.title}
      </div>
  )
}



export default function GroceryList() {
  const [groceryItems, setGroceryItems] = useState([
    {title:"Spaghetti"}, 
    {title:"Soy Sauce"}, 
    {title:"Lettuce"}, 
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };



return(
<div>
<div className="grocery">
<header><h2>This is a grocery list example.</h2></header>
<div className="grocery-container">
<h2>What item do you need at the grocery store? </h2>
<h3>Total Items in List: </h3>

<form onSubmit={handleSubmit}><input type="text" className="grocery-task" placeholder="Please enter a grocery item."
onChange={(e) => setGroceryItems(e.target.value)}>

</input>
</form>
<div className="groceryItems">
  {groceryItems.map((groceryItem, index) => (
    <GroceryItem groceryItem={groceryItem} index={index} key={index} />
  ))}
   </div> 
</div>
</div>

</div>
);

}