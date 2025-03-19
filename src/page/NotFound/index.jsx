import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const NotFound = () => {
  const navigate = useNavigate();
  const flowerRef = useRef(null);
  //The flowerRef is used to directly reference the flower image DOM element.

  useEffect(() => {
    // Spin the flower logo using GSAP
    gsap.to(flowerRef.current, {
      rotation: 360, // Rotate 360 degrees
      duration: 8, // Animation duration, changes the speed of rotation
      repeat: -1, // Infinite loop
      ease: "linear", // Smooth linear rotation
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src="/assets/images/flowerlogo.png"
        alt="flower"
        ref={flowerRef} // Attach the ref to the image
        className="w-40 h-40" // Adjust the size as needed
      />
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
        className="px-6 py-2  rounded-lg transition cursor-pointer"
        style={{ backgroundColor: "#B13A2F", color: "#ECBEC9" }}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
