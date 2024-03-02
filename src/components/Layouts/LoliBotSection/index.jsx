import Loli from "../../../assets/img/LOLI.png";
import Button from "../../Elements/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const LoliBotSection = () => {
  useEffect(() => {
    AOS.init({ durattion: 2000 });
  });

  return (
    <div className="md:block lg:flex lg:grid lg:grid-cols-2 lg:gap-x-12 py-24 lg:py-28 overflow-hidden">
      <div
        className="img-loli w-full md:mb-12"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img src={Loli} alt="Loli" className="w-[400px]" />
      </div>
      <div className="text-loli" data-aos="fade-left" data-aos-duration="1000">
        <h1 className="text-4xl font-black leading-normal mb-8 tracking-wide">
          Bingung mau liburan ke mana? Tanyakan saja pada Loli Bot!
        </h1>
        <p className="leading-loose mb-8 text-gray-600">
          Loli Bot adalah bot yang menyediakan informasi tentang Lombok,
          termasuk destinasi, makanan khas, dan rekomendasi wisata. Dengan
          teknologi terkini, bot ini membantu pengguna untuk mendapatkan
          informasi yang akurat dan berguna tentang pariwisata di Lombok,
          memudahkan perencanaan wisata.
        </p>
        <Button to="/chat">Chat Loli Bot</Button>
      </div>
    </div>
  );
};

export default LoliBotSection;
