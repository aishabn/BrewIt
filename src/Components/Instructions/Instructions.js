import React from "react";

import Timer from "../Timer/Timer";
import Carousel from "../Bootstrap/Carousel";

const Instructions = props => {
  return (
    <div className="wrapper-details-inst">
      <div>{<Timer method={props.method} />}</div>
      <div>{<Carousel method={props.method} />}</div>
    </div>
  );
};
export default Instructions;
