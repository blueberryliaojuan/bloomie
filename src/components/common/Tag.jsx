import React from "react";

function Tag({ name }) {
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-light text-gray-500 mr-2 mb-2"
      style={{ backgroundColor: "var(--secondary-color)" }}
    >
      #{name}
    </span>
  );
}

export default Tag;
