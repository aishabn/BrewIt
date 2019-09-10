import React from "react";
import Timer from "../Timer/Timer";

import { ListGroup, ListGroupItem } from "reactstrap";

const Instructions = props => {
  const instructions = props.method.instructions;
  const instructionList = instructions.map(inst => (
    <li className="list-group-item">{inst}</li>
  ));
  return (
    <div className="wrapper-details">
      <div>{<Timer />}</div>
      <div className="wrapper-details-inst">
        <ul className=" list-group-flush">{instructionList}</ul>
      </div>
    </div>
  );
};
export default Instructions;
