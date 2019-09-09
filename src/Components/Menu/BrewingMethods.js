import React, { useContext } from "react";

import PopupModal from "../Bootstrap/PopupModal";
import { AmountContext } from "../Hooks/AmountContext";

import "./style.css";

const BrewMethods = props => {
  //const { value } = useContext(AmountContext);
  //console.log("BREWING METHODS, NAME", props.method.name);

  return (
    <div className="container">
      <h3 className="font-weight-medium text-center text-lg-left mt-4 mb-0">
        {props.method.name}
      </h3>
      {/* <h3>CONTEXT: {value}</h3> */}
      <hr className="mt-2 mb-5" />
      <div className="row text-center text-lg-left">
        <div className="col-lg-3 col-md-4 col-6" className="box">
          <img
            className="img-fluid img-thumbnail"
            src={props.method.imageUrl}
            alt={props.method.name}
            style={{ height: 160, width: 170 }}
          />

          <PopupModal position="right center" method={props.method} />
        </div>
      </div>
    </div>
  );
};
export default BrewMethods;
