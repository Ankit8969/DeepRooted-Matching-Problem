import React from "react";
import "../styles/popup.css";

const PopUp = ({ matchingArray, setShowPopUp }) => {
  return (
    <div className="popup">
      <table className="tableBox PopUpTable">
        <tr className="table-heading">
          <th>ID1</th>
          <th>ID2</th>
          <th>Price / kg</th>
          <th>Quantity</th>
        </tr>
        {matchingArray.map((item) => (
          <tr>
            <td>{item.type1}</td>
            <td>{item.type2}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </table>
      <div className="overlay" onClick={() => setShowPopUp(false)}></div>
    </div>
  );
};

export default PopUp;
