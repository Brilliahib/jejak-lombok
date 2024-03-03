import Button from "../../Elements/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import BgOrganize from "../../../assets/img/bg-edit.png";

const OrganizeTripSection = () => {
  useEffect(() => {
    AOS.init({ durattion: 2000 });
  });

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-24 text-white px-8">
      <div className="block lg:flex lg:grid lg:grid-cols-2 lg:gap-12 md:block">
        <div
          className="md:mb-24"
          data-aos="fade-right"
          data-aos-once="false"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl font-black mb-8 tracking-wide leading-relaxed text-slate-900">
            Atur perjalanan Anda dengan baik bersama Kami
          </h1>
          <p className="leading-loose mb-8 text-gray-600">
            Website Jejak Lombok merupakan platform yang menyajikan informasi
            lengkap tentang destinasi wisata di pulau Lombok. Dengan fitur
            destinasi wisata Lombok, pengguna dapat dengan mudah menemukan
            tempat-tempat menarik untuk dikunjungi.
          </p>
          <Button to="/about">Tentang Kami</Button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-once="false"
          data-aos-duration="1000"
          className="lg:flex lg:justify-end flex justify-center"
        >
          <img
            src={BgOrganize}
            alt=""
            className="w-[500px] mt-12 sm:mt-0 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizeTripSection;
