import React from "react";
import Individual from "./individual";
import "../styles/table.css";

const ShowList = ({ list }) => {
  if (list.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "30%" }}>
        There is no any Item
      </h2>
    );
  }
  return (
    <table className="tableBox">
      <tr className="table-heading">
        <th>ID</th>
        <th>Time</th>
        <th>Produce</th>
        <th>Price / kg</th>
        <th>Quantity</th>
      </tr>
      {list.map((item) => (
        <Individual item={item} key={item.type} />
      ))}
    </table>
  );
};

export default ShowList;
