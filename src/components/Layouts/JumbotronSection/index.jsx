import React, { useEffect } from "react";
import Asset from "../../../assets/img/Asset 4page.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Jumbotron = () => {
  useEffect(() => {
    AOS.init({ durattion: 1000 });
  });
  return (
    <div className="bg-jumbotron">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-16 jumbotron">
        <div className="flex items-center h-[100vh] justify-center text-center">
          <h1
            className="text-6xl font-black mb-4 tracking-wide text-white leading-normal text-shadow"
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            Discover The Natural Beauty <br /> of Lombok Island
          </h1>
          <div
            className=""
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            {/* <img src={Asset} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
