import React, {useState} from "react";
// import { useState } from "react/cjs/react.production.min";
import Item from "./Item";

function ShoppingList({ items }) {
  // console.log("item", items)

const [selectedCategory, setSelectedCategory] = useState("All")

function handleFilter(event) {
  setSelectedCategory(event.target.value)
}

const displayFilteredFood = items.filter((item) => {
  // console.log(category)
  if (selectedCategory === "All") {
    return true;
  } else {
    return item.category === selectedCategory;
  }
});
console.log(displayFilteredFood)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayFilteredFood.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
