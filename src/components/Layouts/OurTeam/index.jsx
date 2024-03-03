import Akhila from "../../../assets/img/akhila.jpg";
import Brilli from "../../../assets/img/brilli.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const OurTeamSection = () => {
  useEffect(() => {
    AOS.init({ durattion: 2000 });
  });
  return (
    <div>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 sm:mt-24 sm:my-48 my-16 overflow-hidden">
        <div>
          <p
            className="text-base uppercase font-semibold text-sky-700 tracking-wider leading-loose mb-2"
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            TIM KAMI
          </p>
          <h1
            className="font-black text-4xl"
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            Meet the team! All creative people are here
          </h1>
        </div>
        <div className="sm:flex sm:grid sm:grid-cols-2 sm:gap-x-16 mt-16">
          <div
            className="text-center sm:mb-0 mb-12"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <img src={Brilli} alt="" className="rounded-xl sm:mb-0 w-full" />
            <h3 className="text-lg font-bold sm:mt-8 mt-4">
              Muhammad Ahib Ibrilli
            </h3>
            <p className="text-gray-500">Tim Jejak Lombok</p>
          </div>
          <div
            className="text-center"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <img src={Akhila} alt="" className="rounded-xl sm:mb-0 w-full" />
            <h3 className="text-lg font-bold sm:mt-8 mt-4">Akhila Zahra</h3>
            <p className="text-gray-500">Tim Jejak Lombok</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
