import React from "react";

import BrewingMethods from "./BrewingMethods";

import "./style.css";

const MethodList = props => {
  const methodList = props.methods.map(method => (
    <BrewingMethods key={method.name} method={method} />
  ));

  return <div className="wrapper">{methodList}</div>;
};

export default MethodList;
