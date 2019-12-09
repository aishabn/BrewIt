import React, { useState } from "react";

// Components
import BrewingModal from "../BrewingModal/index";

// Styling
import Grid from "@material-ui/core/Grid";
import "../BrewingModal/Modal.css";
import "./style.css";
import "../../index.css";

const BrewMethods = ({ brewingMethod }) => {
  const [modalState, setModalState] = useState(false);

  const handleToggle = () => {
    setModalState(!modalState);
  };

  return (
    <div onClick={handleToggle}>
      <Grid item xs>
        <h3 className="font-weight-medium text-center text-lg-left mt-4 mb-0">
          {brewingMethod.name}
        </h3>
        <hr className="mt-2 mb-5" />
        <div className="row text-center text-lg-left">
          <div className="box">
            <img
              className="img-fluid img-thumbnail"
              src={brewingMethod.imageUrl}
              alt={brewingMethod.name}
              style={{ height: 160, width: 170 }}
            />
            <div>
              <button
                id="#btn"
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#brewingModal"
              >
                Brew
              </button>
            </div>

            <BrewingModal
              handleToggle={handleToggle}
              brewingMethod={brewingMethod}
              modalState={modalState}
            />
          </div>
        </div>
      </Grid>
    </div>
  );
};
export default BrewMethods;
