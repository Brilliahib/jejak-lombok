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
    <div className="sm:flex sm:grid sm:grid-cols-2 sm:gap-x-12 sm:pt-36 pt-24">
      <div className="img-loli" data-aos="fade-right">
        <img src={Loli} alt="Loli" width={300} />
      </div>
      <div className="text-loli" data-aos="fade-left">
        <h1 className="text-4xl font-black leading-normal mb-8 tracking-wide">
          Confused about where to go on holiday? Just ask Loli Bot!
        </h1>
        <p className="leading-loose mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          laboriosam, aut soluta pariatur excepturi, neque ducimus numquam
          incidunt iusto dignissimos officiis voluptatem a eos esse quas nostrum
          odio libero id.
        </p>
        <Button to="/chat">Chat Loli Bot</Button>
      </div>
    </div>
  );
};

export default LoliBotSection;
