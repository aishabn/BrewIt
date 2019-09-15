import React from "react";

const Navbar = props => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ borderBottom: "#282c34 solid 1px" }}
    >
      <a href="#">
        <img
          src="https://i.ibb.co/xCn9sqP/Brew-it-4.png"
          alt="logo"
          style={{ width: "250px", height: "100px" }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
