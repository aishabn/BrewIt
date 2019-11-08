//not used

//total/ratio(12-15) => grams needed
//12 strong, 15 light
import React, { useState, useEffect } from "react";
import MethodDetail from "../BrewingMethodDetails/index";

const AmountCalculator = ({ brewingMethod, amount, choice }) => {
  // const [water, setWater] = useState(0);
  // const [grams, setGrams] = useState(0);
  console.log("choice calc", choice);
  console.log("amount calc", amount);
  let grams;
  let water;

  useEffect(() => {
    grams = parseInt(choice / amount);
    water = parseInt(grams * 15);
  }, [amount, choice, grams, water]);

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <MethodDetail brewingMethod={brewingMethod} grams={grams} water={water} />
    </div>
  );
};
export default AmountCalculator;
