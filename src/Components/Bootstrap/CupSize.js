import React from "react";
import Grid from "@material-ui/core/Grid";

import "../BrewingList/style.css";
const CupSize = ({ handleChange, selectedOption, setSelectedOption }) => {
  const handleChoice = e => {
    setSelectedOption(e);
    handleChange(selectedOption);
  };

  const buttonSize = {
    width: "130px",
    height: "60px"
  };
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={3}>
        <h5>Cup Size:</h5>
      </Grid>
      <Grid item xs={3}>
        <button
          className="modal-box"
          onClick={() => handleChoice(227)}
          style={buttonSize}
        >
          8oz
        </button>
      </Grid>
      <Grid item xs={3}>
        <button
          className="modal-box"
          onClick={() => handleChoice(240)}
          style={buttonSize}
        >
          12oz
        </button>
      </Grid>
      <Grid item xs={3}>
        <button
          className="modal-box"
          onClick={() => handleChoice(454)}
          style={buttonSize}
        >
          16oz
        </button>
      </Grid>
    </Grid>
  );
};

export default CupSize;
