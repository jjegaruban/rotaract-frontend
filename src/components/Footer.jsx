

import React from "react";
import logo from "../assets/logo/logo.png";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaTiktok, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo aligned to the left */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Rotaract Logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 justify-center">
          <a
            href="#"
            className="border border-white text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-white hover:text-[#d82464] transition"
            aria-label="Instagram"
          >
            <FiInstagram size={18} />
          </a>
          <a
            href="#"
            className="border border-white text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-white hover:text-[#d82464] transition"
            aria-label="Facebook"
          >
            <FiFacebook size={18} />
          </a>
          <a
            href="#"
            className="border border-white text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-white hover:text-[#d82464] transition"
            aria-label="TikTok"
          >
            <FaTiktok size={18} />
          </a>
          <a
            href="#"
            className="border border-white text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-white hover:text-[#d82464] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-4" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
        <p className="mb-1">© {new Date().getFullYear()} All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <span className="text-[#d82464] font-semibold">Ruban</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
