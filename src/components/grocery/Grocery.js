import React, { useState, useEffect } from "react";
import "./grocery.scss";



function CreateGroceryItem({ addGroceryItem }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addGroceryItem(value);
    setValue("");
 
}


return(
  <form onSubmit={handleSubmit}>
    <input 
    type="text" 
    className="grocery-task" 
    placeholder="Please enter a grocery item."
    onChange={(e) => setValue(e.target.value)}>

</input>
</form>
) };

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
  const [groceriesRemaining, setGroceriesRemaining] = useState(0);
  useEffect(() => {
    setGroceriesRemaining(groceryItems.length)
  });

  const addGroceryItem = title => {
    const newGroceryItems = [...groceryItems, { title }];
    setGroceryItems(newGroceryItems);
    window.localStorage.setItem('Grocery List', JSON.parse(newGroceryItems));
};

function completeGroceryList() {
  setGroceryItems([]);
}


return(
  
<div>
<div className="grocery">
<header><h2>This is a grocery list example.</h2></header>
<div className="grocery-container">
<h2>What item do you need at the grocery store? </h2>
<h3>Total Items in List: {groceriesRemaining} </h3>


<div className="groceryItems">
  {groceryItems.map((groceryItem, index) => (
    <GroceryItem groceryItem={groceryItem} index={index} key={index} />
  ))}
   </div> 
<div className="createGroceryItem">
    <CreateGroceryItem addGroceryItem={addGroceryItem} />
    <button className="clear-btn" onClick={completeGroceryList}>Clear list</button>

</div>
</div>
</div>

</div>
);

}