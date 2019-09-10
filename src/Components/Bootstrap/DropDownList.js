//NOT USED

import React, { useState, useEffect } from "react";

import CoffeeGrams from "../Instructions/CoffeeGrams";
import "../Menu/style.css";

const DropdownList = props => {
  const [cup, setCup] = useState(false);
  const [gram, setGram] = useState(false);
  const [choice, setChoice] = useState();
  const amount = props.amount;

  useEffect(() => {
    if (choice === "Grams") {
      setGram(true);
      setCup(false);
    } else if (choice === "Cups") {
      setCup(true);
      setGram(false);
    }
  }, [cup, gram, choice]);

  return (
    <div>
      <form>
        <label>Choose your preference:</label>
        <select value={choice} onChange={e => setChoice(e.target.value)}>
          <option />
          <option value="Grams">Grams</option>
          <option value="Cups">Cups</option>
        </select>
        <br />
      </form>
      <br />
      <br />
      <div className="wrapper-details">
        <div>
          {
            <CoffeeGrams
              method={props.method}
              amount={amount}
              choice={choice}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default DropdownList;
