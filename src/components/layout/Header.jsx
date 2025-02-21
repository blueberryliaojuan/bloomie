// import React from "react";
import { Link } from "react-router-dom"; // for internal routing with React Router

const headerHeight = {
  height: "100px",
};
const logoHeight = {
  height: "60px",
};
const Header = () => {
  return (
    <header
      className="bg-amber-400 text-white p-4 shadow-md flex items-center"
      style={{ ...headerHeight, backgroundColor: "var(--primary-color)" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src="public/assets/images/logo.svg"
              alt="Bloomie Logo"
              className="h-full"
              style={logoHeight}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-300">
            Shop
          </Link>
          <Link to="/Seasonal" className="hover:text-gray-300">
            Seasonal
          </Link>
          <Link to="/Occasion" className="hover:text-gray-300">
            Occasion
          </Link>
          <Link to="/About" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>

        {/* Search bar */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md text-black"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
