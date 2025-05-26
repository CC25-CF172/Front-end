import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import PredictionPage from "./Prediction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prediction" element={<PredictionPage />} />
    </Routes>
  );
}

export default App;
