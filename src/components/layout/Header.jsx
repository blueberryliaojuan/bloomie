import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const headerHeight = {
  height: "100px",
};
const logoHeight = {
  height: "60px",
};
const navColor = {
  color: "#f7d9d9",
};
const searchBgColor = {
  backgroundColor: "#f7d9d9",
};
const searchColor = {
  color: "#d10f17",
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const isActive = (path) => location.pathname === path; // Check if the route is active

  return (
    <header
      className="p-4 shadow-md flex items-center"
      style={{
        ...headerHeight,
        backgroundColor: "var(--primary-color)",
        color: "var(--secondary-color)",
      }}
    >
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src="/assets/images/logopink.svg"
              alt="Bloomie Logo"
              className="h-full"
              style={logoHeight}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="relative space-x-6 hidden lg:flex">
          {[
            { path: "/", label: "Home" },
            { path: "/products", label: "Shop" },
            { path: "/Seasonal", label: "Seasonal" },
            { path: "/Occasion", label: "Occasion" },
            { path: "/About", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map((link) => (
            <div key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`hover:text-gray-300 ${
                  isActive(link.path)
                    ? "text-white"
                    : "text-[var(--secondary-color)]"
                }`}
                style={navColor}
              >
                {link.label}
              </Link>
              {/* Sliding Underline */}
              <span
                className={`absolute bottom-[-2px] left-0 h-[2px] w-full bg-[var(--secondary-color)] transition-transform ${
                  isActive(link.path) ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
                style={{ transformOrigin: "left" }}
              ></span>
            </div>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:block" style={searchBgColor}>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md"
            style={searchColor}
          />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#f7d9d9"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden ${
          menuOpen ? "block" : "hidden"
        } fixed top-0 right-0 bg-[var(--secondary-color)] transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <nav className="space-y-4 px-4 py-2">
          {[
            { path: "/", label: "Home" },
            { path: "/products", label: "Shop" },
            { path: "/Seasonal", label: "Seasonal" },
            { path: "/Occasion", label: "Occasion" },
            { path: "/About", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block ${
                isActive(link.path)
                  ? "text-white"
                  : "text-[var(--primary-color)]"
              } hover:text-gray-300`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
