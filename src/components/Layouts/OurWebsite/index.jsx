import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const OurWebSection = () => {
  useEffect(() => {
    AOS.init({ durattion: 2000 });
  });

  return (
    <div>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 sm:mt-24 sm:my-48 my-24">
        <div className="mb-16" data-aos="fade-right">
          <h1 className="text-4xl font-black text-center">Website Kami</h1>
        </div>
        <div className="text-center">
          <div data-aos="fade-left">
            <p className="leading-loose text-gray-600">
              Website Jejak Lombok merupakan platform yang menyajikan informasi
              lengkap tentang destinasi wisata di pulau Lombok. Dengan fitur
              destinasi wisata Lombok, pengguna dapat dengan mudah menemukan
              tempat-tempat menarik untuk dikunjungi. Selain itu, tersedia juga
              chat bot yang membantu pengguna dalam menemukan informasi lebih
              lanjut atau melakukan pemesanan. Tak hanya itu, website ini juga
              menyediakan layanan toko online untuk membeli makanan khas Lombok,
              memungkinkan pengguna untuk merasakan cita rasa lokal tanpa harus
              berkunjung langsung ke tempatnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWebSection;
