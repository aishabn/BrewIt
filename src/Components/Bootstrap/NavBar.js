//Moved to App

import React, { useState } from "react";
import "../BrewingList/style.css";

import MethodList from "../BrewingList/index";
import AboutPage from "../AboutPage/index";

//logo:https://i.ibb.co/55QqKnT/Brew-it-logo.png
//slogan:https://i.ibb.co/0qPgdyW/Brew-it-slogan.png
//full:https://i.ibb.co/xCn9sqP/Brew-it-4.png

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ borderBottom: "#282c34 solid 1px" }}
    >
      <a className="navbar-brand" href="#">
        {/* BrewIt */}
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
      <div id="navbarNav">
        {/* <ul className="navbar-nav"></ul> */}
        <ul className="nav navbar-nav navbar-center">
          <li className="nav-item active">
            <a className="nav-link" href="">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li>
            <img src="https://i.ibb.co/0qPgdyW/Brew-it-slogan.png" alt="logo" />
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
