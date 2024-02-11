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
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 sm:mt-24 sm:my-48 my-24">
        <div data-aos="fade-up">
          <h1 className="font-black text-4xl text-center">Our Team</h1>
        </div>
        <div className="sm:flex sm:grid sm:grid-cols-2 sm:gap-16 mt-16">
          <div className="text-center sm:mb-0 mb-12" data-aos="fade-right">
            <img src={Brilli} alt="" className="rounded-xl mx-auto sm:mb-0" />
            <h3 className="text-lg font-bold sm:mt-8 mt-4">
              Muhammad Ahib Ibrilli
            </h3>
            <p className="text-gray-500">Jejak Lombok Team</p>
          </div>
          <div className="text-center" data-aos="fade-left">
            <img src={Akhila} alt="" className="rounded-xl mx-auto sm:mb-0" />
            <h3 className="text-lg font-bold sm:mt-8 mt-4">Akhila Zahra</h3>
            <p className="text-gray-500">Jejak Lombok Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
