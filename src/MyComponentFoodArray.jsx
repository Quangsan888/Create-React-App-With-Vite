import { element } from "prop-types";
import React, { useState } from "react";
function MyComponentFoodArray() {
  const [food, setFood] = useState(["Apple", "Banna", "Orange"]);

  function handleAddFood() {
    const newFood = document.getElementById("newFood").value;
    document.getElementById("newFood").value = "";
    setFood( food => [...food,newFood])
  }

    function handleRemoveFood(index) {

        setFood(food.filter((element,i ) => i !== index)  )
    }

  return (
    <div>
      <h2>List</h2>
      <ul>
        {food.map((item, index) => (
          <li key={index}   onClick=  { ()=>  handleRemoveFood(index)} >{item}</li>
        ))}
      </ul>
      <input type="text" id="newFood" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}

export default MyComponentFoodArray;
