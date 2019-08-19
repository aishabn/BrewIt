import React from "react";
import { observer } from "mobx-react";

import Popup from "reactjs-popup";
import PopupDetails from "./PopupDetails";
import DropDownList from "./DropDownList";
import styled from "styled-components";
import "./Modal.css";

const PopupExample = props => {
  return (
    <Popup trigger={<button className="Button"> Brew </button>} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> {props.method.name} </div>
          <div className="content">
            <PopupDetails method={props.method} />
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="Button"> Start </button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>//continue to timer</span>
            </Popup>
            <button
              className="Button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default observer(PopupExample);
