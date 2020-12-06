import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [currenttime, setcurrenttime] = useState(0);

  const [active, setactive] = useState(false);

  const handleclick = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value > 0) {
        setcurrenttime(Math.floor(e.target.value));
      } else {
        setcurrenttime(0);
      }

      setactive(true);
    }
  };
  useEffect(() => {
    let interval = null;

    if (active) {
      interval = setInterval(() => {
        if (currenttime === 0) {
          clearInterval(interval);
          return;
        }
        setcurrenttime((currenttime) => currenttime - 1);
      }, 1000);
    }
    if (!active && currenttime === 0) {
      clearInterval(interval);
      setactive(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currenttime, active]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleclick} /> sec.
        </h1>
      </div>
      <div id="current-time">{currenttime}</div>
    </div>
  );
};

export default App;
