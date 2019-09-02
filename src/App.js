import React, { useState } from "react";

import "./App.css";
//Data
import brewMethods from "./data";

//Components
import MethodList from "./Components/Menu/MethodList";

function App() {
  const [methods] = useState(brewMethods);

  return (
    <div class="container">
      <div class="col-12 col-6 col-3">
        <div className="body">
          <main>{<MethodList methods={methods} />}</main>
        </div>
      </div>
    </div>
  );
}

export default App;
