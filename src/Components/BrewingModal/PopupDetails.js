import React, { useState } from "react";

import MethodDetail from "../BrewingMethodDetails/index";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

import "../BrewingList/style.css";
import "./Modal.css";

const PopupDetails = ({ brewingMethod }) => {
  let amount = 15;
  const [grams, setGrams] = useState();
  const [water, setWater] = useState();
  const [selectedOption, setSelectedOption] = useState(227);

  const marks = [
    {
      value: 12,
      label: "12"
    },
    {
      value: 13,
      label: "13"
    },
    {
      value: 14,
      label: "14"
    },
    {
      value: 15,
      label: "15"
    }
  ];

  const handleChange = e => {
    setGrams(parseInt(selectedOption / amount));
    setWater(parseInt(grams * 15));
  };

  const valuetext = value => {
    amount = value;
    handleChange();
    return `${value}`;
  };

  return (
    <div>
      <div className="size-wrapper">
        <div className="Radio">
          <input
            type="radio"
            value="227"
            checked={selectedOption === "227"}
            onChange={e => {
              setSelectedOption(e.currentTarget.value);
              handleChange(e);
            }}
          />
          <img src="https://i.ibb.co/LPjgZ6j/cup.jpg" alt="8oz" />
          8oz
        </div>
        <div className="Radio">
          <input
            type="radio"
            value="340"
            checked={selectedOption === "340"}
            onChange={e => {
              setSelectedOption(e.currentTarget.value);
              handleChange(e);
            }}
          />{" "}
          <img src="https://i.ibb.co/LPjgZ6j/cup.jpg" alt="12oz" />
          12oz
        </div>
        <div className="Radio">
          <input
            type="radio"
            value="454"
            checked={selectedOption === "454"}
            onChange={e => {
              setSelectedOption(e.currentTarget.value);
              handleChange(e);
            }}
          />
          <img src="https://i.ibb.co/LPjgZ6j/cup.jpg" alt="16oz" />
          16oz
        </div>
      </div>
      <br />
      <br />
      <div style={{ paddingLeft: "200px", paddingTop: "30px" }}>
        <Grid container spacing={2}>
          <Grid item sx>
            <h6>lighter</h6>
          </Grid>
          <Grid item s>
            <Slider
              orientation="horizontal"
              defaultValue={15}
              min={12}
              max={15}
              getAriaValueText={valuetext}
              step={1}
              marks={marks}
              valueLabelDisplay="on"
              style={{
                width: "200px"
              }}
            />
          </Grid>
          <Grid item>
            <h6>stronger</h6>
          </Grid>
        </Grid>
      </div>

      <br />
      <br />
      <div>
        <MethodDetail
          brewingMethod={brewingMethod}
          grams={grams}
          water={water}
        />
      </div>
    </div>
  );
};
export default PopupDetails;
