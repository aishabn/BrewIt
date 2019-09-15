import React, { useState } from "react";

import "./App.css";

//Data
import brewMethods from "./data";

//Components
import MethodList from "./Components/Menu/MethodList";
import Navbar from "./Components/Bootstrap/NavBar";
import Footer from "./Components/Bootstrap/Footer";

function App() {
  const [methods] = useState(brewMethods);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col-12 col-6 col-3">
          <div className="body">
            <MethodList methods={methods} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
