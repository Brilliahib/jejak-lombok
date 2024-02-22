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
    <div className="sm:flex sm:grid sm:grid-cols-2 sm:gap-x-12 py-24 sm:py-28">
      <div className="img-loli" data-aos="fade-right">
        <img src={Loli} alt="Loli" width={300} />
      </div>
      <div className="text-loli" data-aos="fade-left">
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
