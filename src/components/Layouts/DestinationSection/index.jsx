import Card from "../../Fragments/Card";
import React, { useState, useEffect, useRef } from "react";
import cardData from "../DestinationSection/cardData.json";

const DestinationLayout = () => {
  const popupRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-24">
      <h1 className="font-extrabold text-3xl sm:text-4xl text-center mb-12 sm:mb-24">
        Rekomendasi <br />
        Destinasi Wisata
      </h1>
      <div className="destination-content">
        <div className="block sm:grid grid-cols-3 gap-x-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              onClick={() =>
                handleCardClick(
                  <div>
                    <h6 className="font-bold text-2xl">{card.title}</h6>
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="popup-image mt-10 rounded-xl mb-4"
                    />
                    <div className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-sky-700 mr-2"
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
                      <p className="text-[#6F6F6F]">{card.description}</p>
                    </div>

                    <iframe
                      src={card.mapsUrl}
                      width="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className=" z-100"
                    ></iframe>
                  </div>
                )
              }
              mt={index === 0 ? "mt-16 sm:mt-0" : ""}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="popup-container">
          <div
            className="popup"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <div className="popup-content">{popupContent}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationLayout;
