import React, { useState } from "react";
import { observer } from "mobx-react";

import PopupModal from "../Bootstrap/PopupModal";

import "./style.css";

const BrewMethods = props => {
  {
    const method = props.method;

    return (
      <div>
        <div className="box">
          <h4>
            <span>{method.name}</span>
          </h4>
          <img src={method.imageUrl} alt={method.name} />
          <h4>
            <br />

            <PopupModal position="right center" method={method} />
          </h4>
        </div>
      </div>
    );
  }
};
export default observer(BrewMethods);
