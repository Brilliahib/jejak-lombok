import React from "react";
import SwiperTestimoni from "../../Fragments/SwiperTestimoni";

const TestimoniSection = () => {
  return (
    <div className="py-12 sm:py-24">
      <p className="text-base uppercase font-semibold text-sky-700 tracking-wider leading-loose">
        Testimoni
      </p>
      <h1 className="text-4xl font-black leading-tight mb-8 tracking-wide text-slate-900">
        Apa Kata Mereka?
      </h1>
      <SwiperTestimoni />
    </div>
  );
};

export default TestimoniSection;
