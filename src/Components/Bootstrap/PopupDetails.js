import React, { useState, useEffect } from "react";

import CoffeeGrams from "../Instructions/CoffeeGrams";
import "../Menu/style.css";

const PopupDetails = props => {
  const [choice, setChoice] = useState("cups");
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    if (choice === "grams") {
      console.log("GRAMS");
    } else if (choice === "cups") {
      console.log("CUPS");
    }
  }, [choice, amount]);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setAmount(e.target.value);
        }}
      >
        <div class="input-group">
          <input
            type="text"
            value={amount}
            placeholder={amount}
            className="form-control"
            aria-label="Text input with dropdown button"
            onChange={e => setAmount(e.target.value)}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {choice}
            </button>
            <div class="dropdown-menu">
              <button class="dropdown-item" onClick={() => setChoice("grams")}>
                Grams
              </button>
              <button class="dropdown-item" onClick={() => setChoice("cups")}>
                Cups
              </button>
            </div>
          </div>
        </div>
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
export default PopupDetails;
