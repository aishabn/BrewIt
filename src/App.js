import React, { useState, useMemo } from "react";

import "./App.css";

//Data
import brewMethods from "./data";

//Components
import MethodList from "./Components/Menu/MethodList";

function App() {
  const [methods] = useState(brewMethods);
  return (
    <div className="container">
      <div className="col-12 col-6 col-3">
        <div className="body">
          <main>{<MethodList methods={methods} />}</main>
        </div>
      </div>
    </div>
  );
}

export default App;
