import React, { useState, useEffect, useRef, Component } from "react";
import { observer } from "mobx-react";

import Timer from "../Timer/Timer";
import Instructions from "../Instructions/Instructions";
import MethodDetail from "../MethodDetails/MethodDetail";

const CoffeeGrams = props => {
  {
    const method = props.method;
    let grams = props.amount * 15;
    let water = method.water;
    if (grams === 0) {
      grams = method.grams;
    } else {
      water = grams * 15;
    }

    const [amount, setAmount] = useState(0);

    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div>
          {<MethodDetail method={method} grams={grams} water={water} />}
        </div>
      </div>
    );
  }
};
export default observer(CoffeeGrams);
