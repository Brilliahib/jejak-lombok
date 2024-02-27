import React, { useState, useEffect } from "react";
import Button from "../../Elements/Button";
import cardsData from "../DestinationSection/cardData.json";
import Card from "../../Fragments/Card";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreSection = () => {
  useEffect(() => {
    AOS.init({ durattion: 1000 });
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 640; // Ubah ukuran sesuai kebutuhan

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const limitedData = isMobile ? cardsData.slice(0, 4) : cardsData.slice(0, 8);

  return (
    <div className="mt-16 sm:mt-24 explore">
      <div className="heading sm:flex sm:justify-between explore-heading mb-4">
        <div>
          <p
            className="text-base font-semibold text-sky-700 tracking-wider leading-loose uppercase"
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            Destinasi Populer
          </p>
          <h1
            className="text-4xl font-black leading-tight mb-8 tracking-wide text-slate-900"
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Cari Destinasi Populer
          </h1>
        </div>
        <Button to="/destinasi">Lihat Semua</Button>
      </div>
      <div className="destination-content">
        <div
          className={`block sm:grid ${
            isMobile ? "grid-cols-2" : "grid-cols-4"
          } gap-x-8`}
        >
          {limitedData.map((card, index) => (
            <Link key={index} to="/destinasi" className="rounded-xl">
              <Card
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.location}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
