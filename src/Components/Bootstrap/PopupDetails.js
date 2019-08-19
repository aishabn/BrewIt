import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { observer } from "mobx-react";

import Timer from "../Timer/Timer";
import MethodDetail from "../MethodDetails/MethodDetail";
import CoffeeGrams from "../Instructions/CoffeeGrams";
import DropDownList from "../Bootstrap/DropDownList";

import "../Menu/style.css";

const PopupDetails = props => {
  return (
    <div>
      <div>{<DropDownList method={props.method} />}</div>
      <br />
      <br />
    </div>
  );
  //dropdownlist
};
export default observer(PopupDetails);
