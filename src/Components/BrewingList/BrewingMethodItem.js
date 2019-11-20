import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// Components
import PopupDetails from "../BrewingModal/PopupDetails";

// Styling
import Grid from "@material-ui/core/Grid";
import "../BrewingModal/Modal.css";
import "./style.css";
import "../../index.css";

const BrewMethods = ({ brewingMethod }) => {
  const [modalState, setState] = useState(false);
  const handleToggle = () => {
    setState(!modalState);
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

            <Modal
              size="lg"
              isOpen={modalState}
              toggle={handleToggle}
              backdrop="false"
            >
              <ModalHeader toggle={handleToggle}>
                {brewingMethod.name}
              </ModalHeader>
              <ModalBody>
                <PopupDetails brewingMethod={brewingMethod} />
              </ModalBody>
              <ModalFooter>
                <button className="button button-dark" onClick={handleToggle}>
                  Cancel
                </button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </Grid>
    </div>
  );
};
export default BrewMethods;
