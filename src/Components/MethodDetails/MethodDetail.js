import React, { useState, useEffect, useRef, Component } from "react";
import { observer } from "mobx-react";

import timer from "../Timer/Timer";
import Instructions from "../Instructions/Instructions";

import "../Menu/style.css";
const MethodDetail = props => {
  const method = props.method;
  const grams = props.grams;
  const water = props.water;

  return (
    <div className="wrapper-details">
      <div className="modal-box">
        <div>Coffee Grounds: </div> <br />
        <div>{method.grind_size}</div>
      </div>
      <div className="modal-box">
        <div>Total Time:</div> <br />
        <div> {method.total_time} minutes</div>
      </div>
      <div className="modal-box">
        <div>Grams of Coffee:</div> <br />
        <div> {grams}g</div>
      </div>
      <div className="modal-box">
        <div>Water:</div> <br />
        <div> {water}ml</div>
      </div>
    </div>
  );
};
export default observer(MethodDetail);
