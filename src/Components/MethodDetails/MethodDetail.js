import React from "react";

import "../Menu/style.css";
const MethodDetail = props => {
  const method = props.method;
  const grams = props.amount;
  const water = props.water;

  return (
    <div className="wrapper-details">
      <div className="modal-box">
        <div>Coffee Grounds: </div> <br />
        <div>{props.method.grind_size}</div>
      </div>
      <div className="modal-box">
        <div>Total Time:</div> <br />
        <div> {props.method.total_time} minutes</div>
      </div>
      <div className="modal-box">
        <div>Grams of Coffee:</div> <br />
        <div> {props.amount}g</div>
      </div>
      <div className="modal-box">
        <div>Water:</div> <br />
        <div> {props.water}ml</div>
      </div>
    </div>
  );
};
export default MethodDetail;
