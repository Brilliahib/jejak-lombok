import React, { useState } from "react";
import FAQItem from "../../Fragments/FAQItem";
import faqData from "./faqData.json";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 sm:mb-24 mb-12">
      <div className="flex justify-center">
        <div className="w-full">
          <p
            className="text-base uppercase font-semibold text-sky-700 tracking-wider leading-loose"
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-duration="1000"
          >
            FAQ
          </p>
          <h1
            className="text-4xl font-black mb-12 text-slate-900"
            data-aos="fade-right"
            data-aos-once="false"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Frequently Asked Questions
          </h1>
          <div>
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === openIndex}
                toggleOpen={() => toggleOpen(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
