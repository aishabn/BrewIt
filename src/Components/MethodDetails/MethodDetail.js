import React, { useContext } from "react";

import { AmountContext } from "../Hooks/AmountContext";

import Instructions from "../Instructions/Instructions";
import "../Menu/style.css";

const MethodDetail = props => {
  const { value } = useContext(AmountContext);

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
