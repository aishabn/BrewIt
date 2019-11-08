import React from "react";

import "../BrewingList/style.css";

const Carousel = ({ brewingMethod }) => {
  const instructions = brewingMethod.instructions;
  let count = 0;
  const instructionList = instructions.map(inst => {
    if (count === 0) {
      count += 1;

      return <div className="carousel-item active">{instructions[0]}</div>;
    } else {
      return <div className="carousel-item">{inst}</div>;
    }
  });
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      <div className="carousel-inner">
        <div className="card-body">
          <p className="card-text">{instructionList}</p>
        </div>
      </div>
      {/* hide prev on first */}
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      {/* hide next on last */}
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
export default Carousel;
