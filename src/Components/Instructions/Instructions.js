import React, { useState, useEffect, useRef, Component } from "react";
import { observer } from "mobx-react";

import timer from "../Timer/Timer";

const Instructions = props => {
  {
    const method = props.method;

    return <div>{method.instructions}</div>;
  }
};
export default observer(Instructions);
