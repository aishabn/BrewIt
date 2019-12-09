import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PopupDetails from "../BrewingModal/PopupDetails";

const BrewingModal = ({ handleToggle, brewingMethod, modalState }) => {
  return (
    <Modal size="lg" isOpen={modalState} toggle={handleToggle} backdrop="false">
      <ModalHeader toggle={handleToggle}>{brewingMethod.name}</ModalHeader>
      <ModalBody>
        <PopupDetails brewingMethod={brewingMethod} />
      </ModalBody>
      <ModalFooter>
        <button className="button button-dark" onClick={handleToggle}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
};
export default BrewingModal;
