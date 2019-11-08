import React, { useState } from "react";

import "./App.css";

//Data
import allBrewMethods from "./data";

//Components
import MethodList from "./Components/BrewingList/index";
import AboutPage from "./Components/AboutPage";

function App() {
  const [brewingMethods] = useState(allBrewMethods);
  const [showHome, setShowHome] = useState(true);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ borderBottom: "#282c34 solid 1px" }}
      >
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
            <li>
              <img
                src="https://i.ibb.co/0qPgdyW/Brew-it-slogan.png"
                alt="logo"
                onClick={() => setShowHome(true)}
              />
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setShowHome(false)}>
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="col-12 col-6 col-3">
          <div className="body">
            {showHome ? (
              <MethodList brewingMethods={brewingMethods} />
            ) : (
              <AboutPage />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
