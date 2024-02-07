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
        <h6 className="font-bold text-2xl my-4">{title}</h6>
        <p className="text-justify text-[#6F6F6F]">{description}</p>
      </div>
    </div>
  );
}

export default Card;
