import React from "react";

//Components
import Instructions from "../Instructions/index";

//Styling
import "../BrewingList/style.css";

const MethodDetail = ({ brewingMethod, grams, water }) => {
  return (
    <div className="wrapper-details">
      <div className="modal-box">
        <div>Grind Size: </div> <br />
        <div>{brewingMethod.grind_size}</div>
      </div>
      <div className="modal-box">
        <div>Brew Time:</div> <br />
        <div> {brewingMethod.total_time} minutes</div>
      </div>
      <div className="modal-box">
        <div>Grams of Coffee:</div> <br />
        <div> {grams}g</div>
      </div>
      <div className="modal-box">
        <div>Water:</div> <br />
        <div> {water}ml</div>
      </div>
      <div>
        <Instructions brewingMethod={brewingMethod} />
      </div>
    </div>
  );
};
export default MethodDetail;
