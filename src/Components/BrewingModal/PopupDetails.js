import React, { useState } from "react";

import CupSize from "../Bootstrap/CupSize";
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
      <CupSize
        handleChange={handleChange}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div styles={{ flexGrow: "1" }}>
        <Grid
          container
          spacing={2}
          direction="row"
          style={{ paddingBottom: "50px" }}
        >
          <Grid item xs={4}>
            <h5>Coffee to Water Ratio: </h5>
          </Grid>
          <Grid item>
            <h6>stronger</h6>
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
                width: "200px",
                color: "#8cb9fd"
              }}
            />
          </Grid>
          <Grid item xs>
            <h6>lighter</h6>
          </Grid>
        </Grid>
      </div>

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
