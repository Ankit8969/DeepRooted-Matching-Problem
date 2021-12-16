import React from "react";
import "../styles/navbar.css";

const Navbar = ({ cnt, setShow, show }) => {
  return (
    <nav>
      <p onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
        Demand and Supply
      </p>
      <div onClick={() => setShow(false)} style={{ cursor: "pointer" }}>
        <i className="fas fa-chart-line"></i>
        <span>{cnt}</span>
      </div>
    </nav>
  );
};

export default Navbar;
