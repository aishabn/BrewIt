import React, { useContext } from "react";

import PopupDetails from "./PopupDetails";
import { AmountContext } from "../Hooks/AmountContext";

import "./Modal.css";

const PopupExample = props => {
  const { value, setValue } = useContext(AmountContext);
  //console.log("POPUP MODAL , METHOD NAME", props.method.name);

  return (
    <div>
      <div>
        <button
          type="button"
          className="btn"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() => {
            //console.log("METHOD NAME, ON CLICK", props.method.name);
            //setValue(props.method.grams);
          }}
        >
          Brew
        </button>
      </div>

      <div
        className="modal fade bd-example-modal-lg"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.method.name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <PopupDetails method={props.method} />
              </div>
              <br />
              <br />
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary">
                Start Brewing
              </button> */}

              <button type="button" className="btn" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupExample;
