import React from "react";

function CardWisata({ imageUrl, mt }) {
  return (
    <div
      className={` ${mt}`}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt="Card"
          className="w-full h-[300px] rounded-xl"
        />
      </div>
    </div>
  );
}

export default CardWisata;
