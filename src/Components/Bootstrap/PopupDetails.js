import React, { useState } from "react";

import CoffeeGrams from "../Instructions/CoffeeGrams";
import "../Menu/style.css";

const PopupDetails = props => {
  const [choice, setChoice] = useState("grams");
  const [amount, setAmount] = useState(props.method.grams);

  return (
    <div>
      <div className="input-group">
        <input
          type="number"
          min={1}
          value={amount}
          className="form-control"
          aria-label="Text input with dropdown button"
          onChange={e => {
            setAmount(e.target.value);
          }}
        />

        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {choice}
          </button>
          <div className="dropdown-menu">
            <button
              className="dropdown-item"
              onClick={() => setChoice("grams")}
            >
              Grams
            </button>
            <button className="dropdown-item" onClick={() => setChoice("cups")}>
              Cups
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="wrapper-details">
        <div>
          {
            <CoffeeGrams
              method={props.method}
              choice={choice}
              amount={amount}
            />
          }
        </div>
      </div>
    </div>
  );
};
export default PopupDetails;
