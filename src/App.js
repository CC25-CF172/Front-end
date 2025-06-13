import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import PredictionPage from "./Prediction";
import EducationPage from "./Education";
import User from "./user";
import LoginPage from "./login";
import RegisterPage from "./Register";
import Navbar from "./pages/components/Navbar";
import ForumPage from "./Forum";
import ForgotPwdPage from "./ForgotPwd";
import ResetPasswordInput from "./ResetPwd";
import EditProfilePage from "./EditProfile";
import ProtectedRoute from "./pages/components/ProtectedRoute";
import EdukasiNutrisiPage from "./EducationNutrition";
import ChatBotPage from "./Chatbot";
import NewForumPage from "./NewForum";
import UpdateForumPage from "./UpdateForum";
import DetailForumPage from "./DetailForum";

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
        <Route
          path="/forum"
          element={
            <ProtectedRoute>
              <ForumPage />
            </ProtectedRoute>
          }
        />
        <Route path="/forgotpwd" element={<ForgotPwdPage />} />
        <Route path="/reset-password" element={<ResetPasswordInput />} />
        <Route path="/editprofile" element={<EditProfilePage />} />
        <Route path="/educationnutrition" element={<EdukasiNutrisiPage />} />
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <ChatBotPage />
            </ProtectedRoute>
          }
        />
        <Route path="/newforum" element={<NewForumPage />} />
        <Route path="/updateforum/:id" element={<UpdateForumPage />} />
        <Route path="/detailforum/:id" element={<DetailForumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
