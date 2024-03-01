import React from "react";

function ArrowIcon({ isOpen, onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-6 h-6 ${isOpen ? "transform rotate-90" : ""}`}
      >
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </div>
  );
}

export default ArrowIcon;
