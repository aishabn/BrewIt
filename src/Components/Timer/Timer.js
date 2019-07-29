import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
//import "./timer.css";

const Timer = () => {
  //const [milli, setMilli] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [currentTime, setTime] = useState(0);

  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setTime(0);
    setIsActive(false);
  }

  useEffect(
    () => {
      let interval = null;
      if (isActive) {
        const startTime = Date.now() - currentTime;
        interval = setInterval(() => {
          setTime(Date.now() - startTime);
          setSeconds(("0" + (Math.floor(currentTime / 1000) % 60)).slice(-2));
          setMinutes(("0" + (Math.floor(currentTime / 60000) % 60)).slice(-2));
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);

        //reset timer to 0
      }
      return () => clearInterval(interval);
    },
    [isActive, seconds],
    [isActive, minutes]
  );

  return (
    <div className="app">
      <div className="time">
        {minutes}mins:{seconds}s
      </div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default observer(Timer);
