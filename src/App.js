import React, { useState, useMemo } from "react";

import "./App.css";

//Data
import brewMethods from "./data";

//Components
import MethodList from "./Components/Menu/MethodList";
import { AmountContext } from "./Components/Hooks/AmountContext";

function App() {
  const [methods] = useState(brewMethods);
  const [value, setValue] = useState(0);
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <AmountContext.Provider value={providerValue}>
      <div className="container">
        <div className="col-12 col-6 col-3">
          <div className="body">
            <main>{<MethodList methods={methods} />}</main>
          </div>
        </div>
      </div>
    </AmountContext.Provider>
  );
}

export default App;
