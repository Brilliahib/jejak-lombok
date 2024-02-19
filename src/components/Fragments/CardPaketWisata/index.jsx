import React from "react";
import Button from "../../Elements/Button";
import PaketWisataData from "./PaketWisataData.json";

function PaketWisata() {
  return (
    <div className="sm:grid sm:grid-cols-4 sm:gap-6 mb-8">
      {PaketWisataData.map((item) => (
        <div
          key={item.id}
          className="relative rounded-xl shadow-md card-paket-wisata h-[400px] sm:mb-0 mb-12 rounded-xl"
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
            <p className="text-[#6F6F6F] mb-4 sm:text-sm text-base leading-loose tracking-normal">
              <ol className="list-decimal ml-4 text-justify">
                {item.description.split(",").map((desc, index) => (
                  <li key={index}>{desc.trim()}</li>
                ))}
              </ol>
            </p>
            <div
              className="absolute bottom-0 flex justify-center"
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <Button
                to={{
                  pathname: "/shop/paket-wisata/payment",
                  state: {
                    title: item.title,
                    price: item.price,
                  },
                }}
              >
                Beli Sekarang
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PaketWisata;
