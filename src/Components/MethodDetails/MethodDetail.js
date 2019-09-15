import React from "react";

import Instructions from "../Instructions/Instructions";
import "../Menu/style.css";

const MethodDetail = props => {
  return (
    <div className="wrapper-details">
      <div className="modal-box">
        <div>Coffee Grounds: </div> <br />
        <div>{props.method.grind_size}</div>
      </div>
      <div className="modal-box">
        <div>Brew Time:</div> <br />
        <div> {props.method.total_time} minutes</div>
      </div>
      <div className="modal-box">
        <div>Grams of Coffee:</div> <br />
        <div> {props.grams}g</div>
      </div>
      <div className="modal-box">
        <div>Water:</div> <br />
        <div> {props.water}ml</div>
      </div>
      <div>
        <Instructions method={props.method} />
      </div>
    </div>
  );
};
export default MethodDetail;
