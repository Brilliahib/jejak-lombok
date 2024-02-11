import OurFoto from "../../../assets/img/our-foto.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const KataKamiSection = () => {
  useEffect(() => {
    AOS.init({ durattion: 2000 });
  });

  return (
    <div className="bg-sky-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 sm:py-12">
        <div className="sm:flex sm:grid sm:grid-cols-2 sm:gap-4">
          <div className="sm:mb-0 mb-16" data-aos="fade-right">
            <img
              src={OurFoto}
              alt=""
              width={400}
              className="rounded-xl mx-auto sm:mb-0"
              style={{ filter: "grayscale(100%)" }}
            />
          </div>
          <div className="" data-aos="fade-left">
            <ul className="leading-loose">
              <li className="text-6xl font-black">"</li>
              <li className="mb-12 text-lg">
                Di balik layar, ada dunia yang terus berkembang dan ide-ide yang
                tak pernah berhenti mengalir. Ada semangat yang membara dan
                dedikasi yang tak tergoyahkan.
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  Muhammad Ahib Ibrilli & Akhila Zahra
                </h3>
                <p className="text-gray-400">Jejak Lombok Team</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KataKamiSection;
