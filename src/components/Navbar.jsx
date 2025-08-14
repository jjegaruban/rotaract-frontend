import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !toggleButtonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Rotaract Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-[#d22163]"
                  : "text-gray-800 hover:text-[#d22163]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          ref={toggleButtonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Menu"
        >
          <div className="relative w-7 h-6">
            <span
              className={`absolute left-0 h-1 w-full bg-[#d22163] rounded transition-all duration-300 ${
                isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute left-0 h-1 w-full bg-[#d22163] rounded transition-all duration-300 top-1/2 ${
                isOpen ? "opacity-0" : "-translate-y-1/2"
              }`}
            ></span>
            <span
              className={`absolute left-0 h-1 w-full bg-[#d22163] rounded transition-all duration-300 ${
                isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white shadow-lg w-full absolute top-20 left-0"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-6 py-4 border-b border-gray-100 text-lg font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-[#d22163] bg-[#fef2f7]"
                  : "text-gray-800 hover:text-[#d22163] hover:bg-[#fef2f7]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
