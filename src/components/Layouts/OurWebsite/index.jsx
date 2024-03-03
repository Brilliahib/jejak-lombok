import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Asset from "../../../assets/img/Asset 2.png";

const OurWebSection = () => {
  useEffect(() => {
    AOS.init({ durattion: 2000 });
  });

  return (
    <div>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 sm:mt-24 sm:my-48 my-24 overflow-hidden">
        <div className="lg:flex lg:grid lg:grid-cols-2 md:block">
          <div
            className="md:flex md:justify-center lg:block md:mb-12 lg:mb-0 mb-12"
            data-aos="fade-up-right"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            <img src={Asset} alt="" className="w-[450px]" />
          </div>
          <div className="flex h-full items-center ">
            <div>
              <p
                className="text-base uppercase font-semibold text-sky-700 tracking-wider leading-loose mb-2"
                data-aos="fade-up-left"
                data-aos-once="false"
                data-aos-duration="1000"
              >
                TENTANG KAMI
              </p>
              <div
                className="mb-4"
                data-aos="fade-up-left"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <h1 className="text-4xl font-black">Jejak Lombok</h1>
              </div>
              <div className="">
                <div
                  data-aos="fade-up-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <p className="leading-loose text-gray-600 text-justify">
                    Website Jejak Lombok adalah platform yang menyajikan
                    informasi lengkap tentang destinasi wisata di Pulau Lombok.
                    Dengan fitur destinasi wisata, pengguna dapat dengan mudah
                    menemukan tempat-tempat menarik untuk dikunjungi. Selain
                    itu, tersedia juga chat bot yang membantu pengguna dalam
                    menemukan informasi lebih lanjut atau melakukan pemesanan.
                    Tak hanya itu, website ini juga menyediakan layanan toko
                    online untuk membeli makanan khas Lombok, memungkinkan
                    pengguna untuk merasakan cita rasa lokal tanpa harus
                    berkunjung langsung ke tempatnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWebSection;
