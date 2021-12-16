import React from "react";

const Individual = ({ item }) => {
  const { type, time, produce, price, quantity } = item;
  return (
    <tr className="table-row">
      <td>{type}</td>
      <td>{time}</td>
      <td>{produce}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );
};

export default Individual;
