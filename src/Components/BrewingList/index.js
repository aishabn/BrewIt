import React from "react";

import BrewingMethodItem from "./BrewingMethodItem";
import Grid from "@material-ui/core/Grid";

import "./style.css";

const MethodList = ({ brewingMethods }) => {
  const methodList = brewingMethods.map(method => (
    <BrewingMethodItem key={method.name} brewingMethod={method} />
  ));

  return (
    <Grid>
      <div className="wrapper">{methodList}</div>
    </Grid>
  );
};

export default MethodList;
