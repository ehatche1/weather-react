import React from "react";

import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App 🌏 </h1>
        <WeatherSearch />
      </header>
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/ehatche1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Egypt Hatchett{" "}
        </a>
        and is{" "}
        <a
          href="https://github.com/ehatche1/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
