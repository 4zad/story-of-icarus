import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Day from "./components/Day";
import Night from "./components/Night";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day" element={<Day />} />
          <Route path="/night" element={<Night />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
