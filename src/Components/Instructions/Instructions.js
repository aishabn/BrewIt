import React from "react";

const Instructions = props => {
  {
    const method = props.method;

    return <div>{method.instructions}</div>;
  }
};
export default Instructions;
