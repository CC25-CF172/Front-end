import React from "react";
import { ChevronDown, ChevronUp, Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">StuntGuard</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Helping parents and healthcare providers monitor and prevent stunting in children through education and early detection.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 cursor-pointer transition-colors">
              <Facebook className="w-4 h-4 text-gray-600 hover:text-blue-500" />
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 cursor-pointer transition-colors">
              <Twitter className="w-4 h-4 text-gray-600 hover:text-blue-500" />
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 cursor-pointer transition-colors">
              <Instagram className="w-4 h-4 text-gray-600 hover:text-blue-500" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">QUICK LINKS</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                Prediction Tool
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                Education Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                Discussion Forum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                Health Chatbot
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">RESOURCES</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                WHO Growth Standards
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                Nutrition Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                Research Papers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500 text-sm transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">CONTACT US</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600 text-sm">
                123 Health Street, Jakarta, Indonesia
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span className="text-gray-600 text-sm">
                +62 812 3456 7890
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span className="text-gray-600 text-sm">
                info@stuntwatch.org
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 StuntGuard. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;