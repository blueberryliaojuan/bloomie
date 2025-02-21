import React, { useState } from "react";

function Card() {
  const cardStyle = {
    backgroundColor: "#d0d0d0",
    borderRadius: "5px",
    padding: "10px",
  };
  const titleStyle = { color: "#252525" };

  return (
    <div style={cardStyle}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 style={titleStyle}>This is Card Name</h1>
      <p>This is card info</p>

      <p className="text-gray-700 dark:text-gray-400">
        <span className="font-medium text-gray-950 dark:text-white">
          Tom Watson
        </span>{" "}
        mentioned you in
        <span className="font-medium text-gray-950 dark:text-white">
          Logo redesign
        </span>
      </p>
      <time className="mt-1 block text-gray-500">9:37am</time>
    </div>
  );
}

export default Card;
