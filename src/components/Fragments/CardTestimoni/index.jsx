import cardTestimoniData from "./cardTestimoniData.json";
import React from "react";

const CardTestimoni = ({ testimoni }) => {
  return (
    <div className="card-testimoni bg-white rounded-xl shadow-md p-4">
      <div className="card-top flex mb-3 justify-between items-center">
        <div className="profile-content flex gap-4 items-center">
          <div className="foto-profile">
            <img
              src={testimoni.imageUrl}
              alt=""
              width={50}
              className="rounded-100"
            />
          </div>
          <div className="nama-profile">
            <p className="text-base font-semibold">{testimoni.nama}</p>
            <p className="text-sm text-[#6F6F6F]">Pengguna Jejak Lombok</p>
          </div>
        </div>
        <div className="rating flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFD700"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <p className="text-base text-gray-600">{testimoni.rating}</p>
        </div>
      </div>
      <hr className="mb-4" />
      <div className="card-content">
        <p className="text-base leading-loose text-gray-600">
          {testimoni.content}
        </p>
      </div>
    </div>
  );
};

export default CardTestimoni;
