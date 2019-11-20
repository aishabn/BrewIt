import React, { useState, useEffect } from "react";
import "./style.css";
import "../BrewingList/style.css";

const Timer = ({ brewingMethod }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [currentTime, setTime] = useState(0);

  const [isActive, setIsActive] = useState(false);

  const propSeconds = brewingMethod.total_time.substring(
    brewingMethod.total_time.indexOf(":") + 1
  );
  const propMinutes = brewingMethod.total_time.substr(
    0,
    brewingMethod.total_time.indexOf(":")
  );

  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setTime(0);
    setIsActive(false);
  };

  const endTimer = () => {
    alert("alert");
    setIsActive(!isActive);
  };

  const checkTime = () => {
    if (propMinutes === minutes && propSeconds === seconds) {
      console.log("alert");
      endTimer();
    }
  };

  useEffect(
    () => {
      let interval = null;
      if (isActive) {
        checkTime();
        const startTime = Date.now() - currentTime;
        interval = setInterval(() => {
          setTime(Date.now() - startTime);
          setSeconds(("0" + (Math.floor(currentTime / 1000) % 60)).slice(-2));
          setMinutes(("0" + (Math.floor(currentTime / 60000) % 60)).slice(-2));
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    },
    [isActive, seconds],
    [isActive, minutes]
  );

  return (
    <div className="app">
      <div className="time">
        {minutes}
        {minutes > 1 ? "mins" : "min"}:{seconds}s
      </div>
      <div className="modal-footer">
        <button
          className={`button button-primary button-secondary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button btn-danger" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
