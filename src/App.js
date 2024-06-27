// src/App.js
import React from "react";
import "./App.css";
import Chart from "./components/Chart";

const App = () => {
  return (
    <div className="app-container">
      <h1>Timeframe Breakdown, Zooming, and Click Events</h1>
      <Chart />
    </div>
  );
};

export default App;
