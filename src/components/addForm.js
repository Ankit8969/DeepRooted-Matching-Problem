import React, { useState } from "react";

const AddForm = (props) => {
  // Destructuring the props
  const {
    select,
    setBackground,
    sdValue,
    sdTime,
    handleSubmitApp,
    checkMatching,
  } = props;

  // for three item, produce, price, quantity
  const [produce, setProduce] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  // I am using this because when the user click on the button it change the color of supply or demand
  const buttonColor = {
    backgroundColor: "#007bff",
    color: "white",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      type: sdValue,
      time: sdTime,
      produce: produce,
      price: price,
      quantity: quantity,
    };
    // unset the form to blank
    setProduce("");
    setPrice("");
    setQuantity("");
    // passing the obj to the submit function
    handleSubmitApp(obj);
  };

  return (
    <div className="form-button">
      <button className="checkMatch" onClick={() => checkMatching()}>
        CHECK MATCHING
      </button>
      <div className="buttons-supply-demand">
        <button
          style={select === 0 ? buttonColor : {}}
          onClick={() => setBackground(0)}
        >
          DEMAND
        </button>
        <button
          style={select === 1 ? buttonColor : {}}
          onClick={() => setBackground(1)}
        >
          SUPPLY
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="time-sd">
          <span className="supplyDemand">{sdValue}</span>
          <span className="timer">{sdTime}</span>
        </div>
        <input
          type="text"
          placeholder="Produce"
          value={produce}
          onChange={(e) => setProduce(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price / kg"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          required
          type="number"
          placeholder="Quantity / kg"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddForm;
