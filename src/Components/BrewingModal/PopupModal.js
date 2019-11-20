//Not used moved to BrewingMethodItem

import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import PopupDetails from "./PopupDetails";

import "./Modal.css";

const Modal = ({ brewingMethod }) => {
  const [modalState, setState] = useState(false);

  const handleToggle = () => {
    setState(!modalState);
  };

  return (
    <div>
      <div>
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
          <ModalHeader toggle={handleToggle}>{brewingMethod.name}</ModalHeader>
          <ModalBody>
            <PopupDetails brewingMethod={brewingMethod} />
          </ModalBody>
          <ModalFooter>
            <button className="button button-primary" onClick={handleToggle}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default Modal;
