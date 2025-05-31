import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import PredictionPage from "./Prediction";
import ForumPage from "./Forum";
import NewForumPage from "./NewForum";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prediction" element={<PredictionPage />} />
      <Route path="/forum" element={<ForumPage />} />
      <Route path="/newforum" element={<NewForumPage />} />
    </Routes>
  );
}

export default App;
