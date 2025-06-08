import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import PredictionPage from "./Prediction";
import ForumPage from "./Forum";
import NewForumPage from "./NewForum";
import ChatbotPage from "./Chatbot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prediction" element={<PredictionPage />} />
      <Route path="/forum" element={<ForumPage />} />
      <Route path="/newforum" element={<NewForumPage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
    </Routes>
  );
}

export default App;
