import React, { useState } from "react";

import "./App.css";

//Data
import allBrewMethods from "./data";

//Components
import MethodList from "./Components/BrewingList/index";
import AboutPage from "./Components/AboutPage";
import NavBar from "./Components/Bootstrap/NavBar";

import Grid from "@material-ui/core/Grid";

function App() {
  const [brewingMethods] = useState(allBrewMethods);
  const [showHome, setShowHome] = useState(true);

  return (
    <>
      <NavBar setShowHome={setShowHome} />
      <div style={{ flexGrow: "3" }}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {showHome ? (
            <MethodList brewingMethods={brewingMethods} />
          ) : (
            <AboutPage />
          )}
        </Grid>
      </div>
    </>
  );
}

export default App;
