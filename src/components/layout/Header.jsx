// import React from "react";
import { Link } from "react-router-dom"; // for internal routing with React Router
import { useState } from "react";

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
        {/* when screen is smaller than large（1024px）, it will be hidden  */}
        <nav className="space-x-6 hidden lg:flex">
          <Link to="/" style={navColor} className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/products" style={navColor} className="hover:text-white">
            Shop
          </Link>
          <Link to="/Seasonal" className="hover:text-gray-300" style={navColor}>
            Seasonal
          </Link>
          <Link to="/Occasion" className="hover:text-gray-300" style={navColor}>
            Occasion
          </Link>
          <Link to="/About" className="hover:text-gray-300" style={navColor}>
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300" style={navColor}>
            Contact
          </Link>
        </nav>

        {/* Search bar */}
        {/* when screen is smaller than large（1024px）, it will be hidden  */}
        <div className="hidden lg:block" style={searchBgColor}>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md"
            style={searchColor}
          />
        </div>

        {/* Mobile Hamburger Menu */}
        {/* when screen is bigger than large（1024px）, it will be hidden  */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => {
              setMenuOpen(!menuOpen);
              console.log("Menu Open:", menuOpen);
            }}
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
      {/* <div className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}> */}
      <div
        className={`lg:hidden ${
          menuOpen ? "block" : "hidden"
        } fixed top-0 right-0  bg-[var(--secondary-color)] transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <nav
          className="space-y-4 px-4 py-2 "
          style={{ backgroundColor: "var(--secondary-color)" }}
        >
          <Link
            to="/"
            style={{ color: "var(--primary-color)" }}
            className="block text-white hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            style={{ color: "var(--primary-color)" }}
            className="block text-white hover:text-gray-300"
          >
            Shop
          </Link>
          <Link
            to="/Seasonal"
            className="block text-white hover:text-gray-300"
            style={{ color: "var(--primary-color)" }}
          >
            Seasonal
          </Link>
          <Link
            to="/Occasion"
            className="block text-white hover:text-gray-300"
            style={{ color: "var(--primary-color)" }}
          >
            Occasion
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-gray-300"
            style={{ color: "var(--primary-color)" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-gray-300"
            style={{ color: "var(--primary-color)" }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
