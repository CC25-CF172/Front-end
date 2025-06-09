import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullname, setFullname] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setFullname(localStorage.getItem("fullname"));
  }, []);

  // Menutup dropdown jika klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullname");
    setFullname(null);
    setIsDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white text-[#0D1B2A] shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link to="/">StuntGuard</Link>
        </div>

        {/* Navigation Menu */}
        <ul className="flex gap-6 text-sm">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/prediction" className="hover:text-blue-500">Prediction</Link></li>
          <li><Link to="/education" className="hover:text-blue-500">Education</Link></li>
          <li><Link to="/forum" className="hover:text-blue-500">Forum</Link></li>
          <li><Link to="/chatbot" className="hover:text-blue-500">Chatbot</Link></li>
        </ul>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          {/* Conditional Rendering berdasarkan status login */}
          {!fullname ? (
            
            <div className="flex items-center gap-3">
              <Link 
                to="/Login" 
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-full text-sm hover:bg-blue-50 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/Register" 
                className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors"
              >
                Register
              </Link>
            </div>
          ) : (
            
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors"
              >
                <FaUserCircle className="text-lg" />
                <span>Profile</span>
                <IoIosArrowDown 
                  className={`text-base transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 text-sm z-50">
                  {/* Menu Items */}
                  <Link 
                    to="/user" 
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <FaUserCircle className="text-gray-400" />
                    Your Profile
                  </Link>
                  
                  <Link 
                    to="/settings" 
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                    Settings
                  </Link>
                  
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <polyline points="16,17 21,12 16,7"/>
                        <line x1="21" y1="12" x2="9" y2="12"/>
                      </svg>
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;