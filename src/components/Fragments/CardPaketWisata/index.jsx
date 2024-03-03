import React from "react";
import PaketWisataData from "./PaketWisataData.json";

function PaketWisata() {
  const handleButtonClick = (title, price, description) => {
    window.location.href = `/shop/paket-wisata/payment?title=${title}&price=${price}&description=${description}`;
  };

  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-6 mb-8 md:grid-cols-2 md:grid md:gap-x-12">
      {PaketWisataData.map((item) => (
        <div
          key={item.id}
          className="relative rounded-xl shadow-md card-paket-wisata h-[460px] sm:mb-0 mb-12 rounded-xl md:mb-12"
        >
          <img
            src={item.imageUrl}
            alt=""
            className="rounded-t-xl w-full"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="bg-white p-4 rounded-b-xl">
            <p className="font-semibold text-base">{item.title}</p>
            <p className="text-[#6F6F6F] mb-4 font-semibold text-base">
              Rp {item.price.toLocaleString()} / Orang
            </p>
            <p className="text-[#6F6F6F] mb-4 sm:text-sm text-base leading-loose">
              <ol className="leading-loose">
                {item.description.split(",").map((desc, index) => (
                  <li key={index} className="flex gap-x-1 text-sm mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 text-sky-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    {desc.trim()}
                  </li>
                ))}
              </ol>
            </p>
            <div
              className="absolute bottom-0 flex justify-center"
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <button
                className="bg-sky-700 h-10 px-8 font-medium rounded-md text-white border border-transparent transition duration-300 hover:bg-white hover:border-sky-700 hover:text-sky-700"
                onClick={() =>
                  handleButtonClick(item.title, item.price, item.description)
                }
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PaketWisata;
