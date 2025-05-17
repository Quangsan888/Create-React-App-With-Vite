import { element } from "prop-types";
import React, { useState } from "react";

function MyComponentArrayOfObject() {
  const [car, setCar] = useState([]);
  const [carYear, setCaryear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar1() {
    const newCar = { year: carYear, 
                      make: carMake, 
                      model: carModel };

    setCar((car) => [...car, newCar]);
    setCaryear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
      setCar(c => c.filter( (element,i)=> i !== index))
  }
  function handleYearChange(event) {
    setCaryear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {car.map((element, index) => (
          <li key={index} onClick={()=>handleRemoveCar(index)}>
            {element.year} {element.make} {element.model}
          </li>
        ))}
      </ul>

      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handleAddCar1}>Add car</button>
    </div>
  );
}

export default MyComponentArrayOfObject;
