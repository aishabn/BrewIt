import React from "react";

import "../Menu/style.css";

const Carousel = props => {
  const instructions = props.method.instructions;
  let count = 0;
  const instructionList = instructions.map(inst => {
    if (count === 0) {
      count += 1;

      return <div class="carousel-item active">{instructions[0]}</div>;
    } else {
      return <div class="carousel-item">{inst}</div>;
    }
  });
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="card-body">
          <p class="card-text">{instructionList}</p>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};
export default Carousel;
