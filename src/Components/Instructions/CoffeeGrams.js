import React, { useState, useEffect, useRef } from "react";

import MethodDetail from "../MethodDetails/MethodDetail";

const CoffeeGrams = props => {
  const [water, setWater] = useState(props.method.water);
  const [grams, setGrams] = useState(0);

  useEffect(() => {
    first();
  }, [props.amount, props.choice, grams]);

  const first = async () => {
    if (props.choice === "cups") {
      if (props.amount == 0) {
        setGrams(props.method.grams);
        setWater(props.method.water);
      } else {
        setGrams(parseInt(props.amount) * parseInt(props.method.grams));
        setWater(240 * props.amount);
      }
    } else if (props.choice === "grams") {
      if (props.amount === "0") {
        setGrams(props.method.grams);
      } else {
        console.log(water);
        setWater(parseInt(props.amount * 15));
        console.log("after", water);
      }
    }
  };
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div>
        {<MethodDetail method={props.method} amount={grams} water={water} />}
      </div>
    </div>
  );
};
export default CoffeeGrams;
