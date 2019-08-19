import React, { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { observer } from "mobx-react";

import CoffeeGrams from "../Instructions/CoffeeGrams";
import "../Menu/style.css";

const DropdownList = props => {
  const [cup, setCup] = useState();
  const [gram, setGram] = useState();
  const [amount, setAmount] = useState(0);

  function handleCup() {
    setCup(true);
    setGram(false);
    console.log("CUP ", cup);
  }

  function handleGram() {
    setGram(true);
    setCup(false);
    console.log("GRAM ", gram);
  }

  function handleSubmit(e) {
    setAmount(e.target.value);
    console.log("SUBMIT", amount);
  }
  return (
    <div>
      <div>
        <input
          type="radio"
          name="radioButtonTest"
          value="1"
          id="grams"
          onClick={handleGram}
        />
        <label htmlFor="grams">Grams</label>
        <input
          type="radio"
          name="radioButtonTest"
          value="2"
          id="cups"
          onClick={handleCup}
        />
        <label htmlFor="cups">Cups</label>
        <br />
        <br />
        <InputGroup className="mb-3">
          <FormControl
            placeholder="0"
            aria-label="amount"
            aria-describedby="basic-addon2"
            onChange={handleSubmit}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={handleSubmit}>
              submit
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>

      <br />
      <br />
      <div className="wrapper-details">
        <div> {<CoffeeGrams method={props.method} amount={amount} />}</div>
      </div>
    </div>
  );
};

export default observer(DropdownList);
