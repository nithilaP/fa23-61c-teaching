import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Piazza from "./components/Piazza";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Piazza" element={<Piazza />} />
    </Routes>
  );
}

export default App;
