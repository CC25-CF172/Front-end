import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import PredictionPage from "./Prediction";
import EducationPage from "./Education";
import User from "./user";
import LoginPage from "./login";
import RegisterPage from "./Register";
import Navbar from "./pages/components/Navbar";
import ProtectedRoute from "./pages/components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/prediction"
          element={
            <ProtectedRoute>
              <PredictionPage />
            </ProtectedRoute>
          }
        />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
