import React from "react";

import BrewingMethodItem from "./BrewingMethodItem";

import "./style.css";

const MethodList = ({ brewingMethods }) => {
  const methodList = brewingMethods.map(method => (
    <BrewingMethodItem key={method.name} brewingMethod={method} />
  ));

  return <div className="wrapper">{methodList}</div>;
};

export default MethodList;
