import React from "react";
import { Routes, Route } from "react-router-dom";
import A from "./components/A";
import C from "./components/C";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="" element={<C />} />
      <Route path="/61a" element={<A />} />
    </Routes>
  );
}

export default App;
