import React from "react";

function Card({ imageUrl, title, description, mt, onClick }) {
  return (
    <div
      className={`card mb-12 ${mt}`}
      onClick={onClick}
      style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt="Card"
          className="card-image w-full h-auto rounded-t-xl"
        />
      </div>
      <div className="card-content bg-white shadow pt-2 p-4 rounded-b-xl flex-grow">
        <p className="font-semibold text-base my-1">{title}</p>
        <p className="text-[#6F6F6F] flex text-sm tracking-wide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-sky-700 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
