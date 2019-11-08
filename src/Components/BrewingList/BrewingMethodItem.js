import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import PopupModal from "../BrewingModal/PopupModal";
import PopupDetails from "../BrewingModal/PopupDetails";

import "../BrewingModal/Modal.css";
import "./style.css";

const BrewMethods = ({ brewingMethod }) => {
  const [modalState, setState] = useState(false);
  const handleToggle = () => {
    setState(!modalState);
  };

  return (
    <div onClick={handleToggle}>
      <div className="container">
        <h3 className="font-weight-medium text-center text-lg-left mt-4 mb-0">
          {brewingMethod.name}
        </h3>
        <hr className="mt-2 mb-5" />
        <div className="row text-center text-lg-left">
          <div className="col-lg-3 col-md-4 col-6" className="box">
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

            <Modal size="lg" isOpen={modalState} toggle={handleToggle}>
              <ModalHeader toggle={handleToggle}>
                {brewingMethod.name}
              </ModalHeader>
              <ModalBody>
                <PopupDetails brewingMethod={brewingMethod} />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={handleToggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrewMethods;
