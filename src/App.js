import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Piazza from "./components/Piazza";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="piazza" element={<Piazza />} />
      <Route path="" element={<Main />} />
    </Routes>
  );
}

export default App;
