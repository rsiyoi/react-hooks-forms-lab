import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemList, setItemList] = useState(items);
  const [searchText, setSearchText] = useState("");



  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItemList([...itemList, newItem]);
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return item.category === selectedCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
       <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
        searchText={searchText}
        category={selectedCategory}
      
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
