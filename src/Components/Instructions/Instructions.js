import React from "react";
import Timer from "../Timer/Timer";
const Instructions = props => {
  const instructions = props.method.instructions;
  const instructionList = instructions.map(inst => <li>{inst}</li>);
  return (
    <div className="wrapper-details">
      <div>{<Timer />}</div>
      <div className="wrapper-details-inst">
        <ul className="list-unstyled">{instructionList}</ul>
      </div>
    </div>
  );
};
export default Instructions;
