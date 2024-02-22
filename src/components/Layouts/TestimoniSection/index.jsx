import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import SwiperTestimoni from "../../Fragments/SwiperTestimoni";

const TestimoniSection = () => {
  useEffect(() => {
    AOS.init({ durattion: 2000 });
  });
  return (
    <div className="py-12 sm:py-24">
      <p
        className="text-base uppercase font-semibold text-sky-700 tracking-wider leading-loose"
        data-aos="fade-right"
        data-aos-once="false"
        data-aos-duration="1000"
      >
        Testimoni
      </p>
      <h1
        className="text-4xl font-black leading-tight mb-8 tracking-wide text-slate-900"
        data-aos="fade-right"
        data-aos-once="false"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        Apa Kata Mereka?
      </h1>
      <SwiperTestimoni />
    </div>
  );
};

export default TestimoniSection;
