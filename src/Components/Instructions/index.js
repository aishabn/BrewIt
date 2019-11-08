import React from "react";

import Timer from "../Timer";
import Carousel from "../Bootstrap/Carousel";

const Instructions = ({ brewingMethod }) => {
  return (
    <div className="wrapper-details-inst">
      <div>{<Timer brewingMethod={brewingMethod} />}</div>
      <div>{<Carousel brewingMethod={brewingMethod} />}</div>
    </div>
  );
};
export default Instructions;
