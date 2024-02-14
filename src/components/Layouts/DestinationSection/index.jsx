import React, { useState, useEffect } from "react";
import cardData from "../DestinationSection/cardData.json";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "../../Fragments/SearchBar";
import Card from "../../Fragments/Card";

const DestinationLayout = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = cardData.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  const handleCardClick = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 sm:mt-24 mt-12">
      <div
        className="flex justify-center search-bar"
        style={{ marginTop: "-8.5rem" }}
      >
        <div className="bg-white shadow-md p-4 rounded-xl search-container">
          <SearchBar placeholder="Search..." handleChange={handleChange} />
        </div>
      </div>
      <h1 className="font-extrabold text-3xl sm:text-4xl text-center mb-12 sm:mb-24 sm:mt-24 mt-12">
        Rekomendasi <br />
        Destinasi Wisata
      </h1>
      <div className="destination-content">
        <div className="block sm:grid grid-cols-3 gap-x-8">
          {filteredData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              description={card.description}
              title={card.title}
              onClick={() =>
                handleCardClick(
                  <div className="sm:flex sm:grid sm:grid-cols-2 sm:gap-x-12">
                    <div className="div-pop-img">
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className="popup-image mt-10 rounded-xl mb-4 sm:m-0"
                      />
                    </div>
                    <div className="pop-content">
                      <h6 className="font-bold text-xl text-left mb-4">
                        {card.title}
                      </h6>
                      <div className="flex items-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-sky-700 mr-2"
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
                        <p className="text-[#6F6F6F] text-sm">
                          {card.description}
                        </p>
                      </div>

                      <iframe
                        src={card.mapsUrl}
                        width="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className=" z-100 rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                )
              }
              mt={index === 0 ? "mt-16 sm:mt-0" : ""}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="popup-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="popup"
              style={{ maxHeight: "80vh", overflowY: "auto" }}
              initial={{ y: "100vh", scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: "100vh", scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="close" onClick={() => setShowPopup(false)}>
                &times;
              </span>

              <div className="popup-content">{popupContent}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DestinationLayout;
