import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import PopupDetails from "./PopupDetails";

import "./Modal.css";

const ModalExample = props => {
  const [state, setState] = useState(false);

  return (
    <div>
      <div>
        <div>
          <button
            id="#btn"
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => setState(!state)}
          >
            Brew
          </button>
        </div>

        <Modal size="lg" isOpen={state} toggle={() => setState(!state)}>
          <ModalHeader toggle={() => setState(!state)}>
            {props.method.name}
          </ModalHeader>
          <ModalBody>
            <PopupDetails method={props.method} />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setState(!state)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default ModalExample;
