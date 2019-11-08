//not used
import React, { useState } from "react";

const RadioButtons = ({ value }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="april">
      <input
        type="radio"
        value="Yes"
        checked={selectedOption === "Yes"}
        onChange={e => setSelectedOption(e.currentTarget.value)}
      />
      Yes
      <input
        type="radio"
        value="No"
        checked={selectedOption === "No"}
        onChange={e => setSelectedOption(e.currentTarget.value)}
      />
      No
      <input
        type="radio"
        value="H"
        checked={selectedOption === "H"}
        onChange={e => setSelectedOption(e.currentTarget.value)}
      />
      <h3>this.state.selectedOption: {selectedOption}</h3>
    </div>
  );
};

export default RadioButtons;
