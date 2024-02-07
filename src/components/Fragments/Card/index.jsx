import React from "react";

function Card({ imageUrl, title, description, mt, onClick }) {
  return (
    <div
      className={`card mb-6 ${mt}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img src={imageUrl} alt="Card" className="card-image rounded-xl" />
      <div className="card-content">
        <p className="font-bold text-lg my-3">{title}</p>
        <p className="text-justify text-[#6F6F6F]">{description}</p>
      </div>
    </div>
  );
}

export default Card;
