import React, { useState, useEffect } from "react";

import MethodDetail from "../MethodDetails/MethodDetail";

const CoffeeGrams = props => {
  const [water, setWater] = useState(props.method.water);
  const [grams, setGrams] = useState(0);

  useEffect(() => {
    first();
  }, [props.amount, props.choice]);

  const first = async () => {
    if (props.choice === "cups") {
      if (props.amount === 0 || props.amount === undefined) {
        setGrams(props.method.grams);
        setWater(props.method.water);
      } else {
        setGrams(parseInt(props.amount) * parseInt(props.method.grams));
        setWater(props.method.water * props.amount);
      }
    } else if (props.choice === "grams") {
      if (props.amount === 0 || props.amount === undefined) {
        setWater(props.method.water);
        setGrams(props.method.grams);
      } else {
        setGrams(props.amount);
        setWater(parseInt(props.amount * 15));
      }
    }
  };
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div>
        {<MethodDetail method={props.method} grams={grams} water={water} />}
      </div>
    </div>
  );
};
export default CoffeeGrams;
