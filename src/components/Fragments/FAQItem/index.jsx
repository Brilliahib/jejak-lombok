import React from "react";

function FAQItem({ question, answer, isOpen, toggleOpen }) {
  return (
    <div
      className="mb-8 w-full cursor-pointer rounded-md"
      data-aos="fade-up"
      data-aos-once="false"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div onClick={toggleOpen} className="transition-colors">
        <div className="flex items-center justify-between mb-4">
          <p className="text-base font-semibold tracking-wide">{question}</p>
          <div className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-5 h-5 text-sky-700 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <hr className="border-gray-400" />
      </div>
      <div
        className={`faq-item-content overflow-hidden transition-all duration-500 ${
          isOpen ? "h-auto" : "h-0"
        }`}
        style={{ maxHeight: isOpen ? "10rem" : "0" }}
      >
        <p className="mt-4 text-[#6F6F6F] leading-loose">{answer}</p>
      </div>
    </div>
  );
}

export default FAQItem;
