import React, {useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [isToggled, setIsToggle] = useState(false)

  function handleToggleClick() {
    setIsToggle(!isToggled)
  }

  const appClass = isToggled ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleClick}>
          {isToggled ? "Dark Mode" : "Light Mode"}
          </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
