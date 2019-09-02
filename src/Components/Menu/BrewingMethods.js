import React from "react";

import PopupModal from "../Bootstrap/PopupModal";

import "./style.css";

const BrewMethods = props => {
  const method = props.method;

  return (
    <div className="container">
      <h3 className="font-weight-medium text-center text-lg-left mt-4 mb-0">
        {method.name}
      </h3>

      <hr className="mt-2 mb-5" />

      <div className="row text-center text-lg-left">
        <div className="col-lg-3 col-md-4 col-6" class="box">
          <div className="box">
            <img
              className="img-fluid img-thumbnail"
              src={method.imageUrl}
              alt={method.name}
              style={{ height: 160, width: 170 }}
            />

            <PopupModal position="right center" method={method} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrewMethods;
