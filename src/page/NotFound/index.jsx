import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src="public/assets/images/flowerlogo.png" alt="flower" />
      <h1
        className="text-6xl font-bold text-deepRed mb-4 py-7"
        style={{ color: "#ECBEC9" }}
      >
        404
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2  text-white rounded-lg  transition"
        style={{ backgroundColor: "#B13A2F", color: "#ECBEC9" }}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
