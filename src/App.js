import React, { useState } from "react";
import AddForm from "./components/addForm";
import Navbar from "./components/navbar";
import PopUp from "./components/popup";
import ShowList from "./components/showList";
import "./styles/app.css";

const App = () => {
  // storing the object in the list
  const [list, setList] = useState([]);
  const [supply, setSupply] = useState([]);
  const [demand, setDemand] = useState([]);
  const [match, setMatch] = useState([]);
  // select the demand and supply
  const [select, setSelect] = useState(-1);
  // for value print the selected and time
  const [sdValue, setSDValue] = useState("");
  const [sdTime, setSDTime] = useState("");
  // this is for changing the component
  const [show, setShow] = useState(true);
  // for popUp show and hide
  const [showPopup, setShowPopUp] = useState(false);

  // this function set the time and the name of the Supplier/ Demander
  // take the time from the background of user
  const setBackground = (data) => {
    setSelect(data);
    var time = new Date();
    time = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setSDTime(time);
    if (data === 0) setSDValue("D" + (demand.length + 1));
    else setSDValue("S" + (supply.length + 1));
  };

  // this function run when the user trying to add the data as Supplier / Demander
  const handleSubmit = (obj) => {
    // if the used didn't select any option like supplier, demander the it simply return
    if (select === -1) return;
    setList([...list, obj]);
    if (select === 0) setDemand([...demand, obj]);
    else if (select === 1) setSupply([...supply, obj]);
    // this initialization makes the form emply after submit
    setSDValue("");
    setSDTime("");
    setSelect(-1);
  };

  // this function runs when the user want to check which demander is connect with which supplier
  const checkMatching = () => {
    const matchingArray = [];
    // taking the shallow copy of arrays of supplier and demand
    const demandT = JSON.parse(JSON.stringify(demand));
    const supplyT = JSON.parse(JSON.stringify(supply));

    // by using these two loops I am checking the which demander is connected with which supplier
    for (let i = 0; i < demandT.length; i++) {
      for (let j = 0; j < supplyT.length; j++) {
        if (demandT[i].produce === supplyT[j].produce) {
          if (
            demandT[i].price >= supplyT[j].price &&
            demandT[i].quantity > 0 &&
            supplyT[j].quantity > 0
          ) {
            let minValue = Math.min(demandT[i].quantity, supplyT[j].quantity);
            demandT[i].quantity -= minValue;
            supplyT[j].quantity -= minValue;
            let obj = {
              type1: demandT[i].type,
              type2: supplyT[j].type,
              price: supplyT[j].price,
              quantity: minValue,
            };
            matchingArray.push(obj);
          }
        }
      }
    }
    // set the matching array list
    setMatch(matchingArray);
    setShowPopUp(true);
  };

  return (
    <React.Fragment>
      {/* Nav bar component  */}
      <Navbar cnt={list.length} setShow={setShow} />

      {/* Form comonenet */}
      {show ? (
        <AddForm
          select={select}
          setBackground={setBackground}
          handleSubmitApp={handleSubmit}
          sdValue={sdValue}
          sdTime={sdTime}
          checkMatching={checkMatching}
        />
      ) : (
        <ShowList list={list} />
      )}

      {/* PopUp Component */}
      {showPopup ? (
        <PopUp matchingArray={match} setShowPopUp={setShowPopUp} />
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default App;
