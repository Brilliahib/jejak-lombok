import Button from "../../Elements/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const OrganizeTripSection = () => {
  useEffect(() => {
    AOS.init({ durattion: 2000 });
  });

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-24 text-white px-8">
      <div className="block sm:flex sm:grid sm:grid-cols-2 sm:gap-12">
        <div
          className=""
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
        >
          <img
            src="https://images.unsplash.com/photo-1500207907633-4ccab9bf1535?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full mt-12 sm:mt-0 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizeTripSection;
