import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white text-[#0D1B2A] shadow sticky top-0 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
      <div className="text-xl font-bold text-blue-600">
        <Link to="/">StuntGuard</Link>
      </div>
      <ul className="flex gap-6 text-sm">
        <li>
          <Link to="/" className="hover:text-blue-500 cursor-pointer">Home</Link>
        </li>
        <li>
          <Link to="/prediction" className="hover:text-blue-500 cursor-pointer">Prediction</Link>
        </li>
        <li>
          <Link to="/education" className="hover:text-blue-500 cursor-pointer">Education</Link>
        </li>
        <li>
          <Link to="/forum" className="hover:text-blue-500 cursor-pointer">Forum</Link>
        </li>
        <li>
          <Link to="/chatbot" className="hover:text-blue-500 cursor-pointer">Chatbot</Link>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Profile</div>
      </div>
    </div>
  </nav>
);

export default Navbar;