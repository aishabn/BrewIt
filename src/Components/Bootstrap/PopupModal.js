import React from "react";

import PopupDetails from "./PopupDetails";
import "./Modal.css";

const PopupExample = props => {
  return (
    <div>
      <div>
        <button
          type="button"
          className="btn"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Brew
        </button>
      </div>

      <div
        className="modal fade bd-example-modal-lg"
        id="exampleModal"
        tabindex="-1"
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
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary">
                Start
              </button>
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
