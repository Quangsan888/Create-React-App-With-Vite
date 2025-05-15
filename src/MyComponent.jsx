import React, { use, useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [commmnet, setCommnet] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Pick up","deleveri"); 
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setCommnet(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event){
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name {name}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity {quantity}</p>
      <br />
      <textarea
        value={commmnet}
        onChange={handleCommentChange}
        placeholder="enter"
      />

      <p>Comment {commmnet}</p>


      <select value={payment} onChange={handlePaymentChange}>
           <option value="">Select option</option>
           <option value="Visa">Visa</option>
           <option value="MasterCard">MasterCard</option>
      </select>
      <p>Payment {payment}</p>


      <label >
        Pick up
        <input type="radio"  name="shipping" value="Pick up"  checked={shipping === "Pick up"} onChange={handleShippingChange} />
      </label><br />

      <label>
        deleveri
        <input type="radio" name="shipping"  value="deleveri"  checked={shipping === "deleveri"}onChange={handleShippingChange}/>
      </label>

      <p> Shipping method {shipping}</p>
    </div>
  );
}

export default MyComponent;
