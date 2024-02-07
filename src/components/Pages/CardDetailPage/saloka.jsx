import SalokaLayout from "../../Layouts/CardDetail/Saloka";
import React, { useEffect } from "react";

const SalokaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SalokaLayout>
      <div className="sm:flex mt-12 sm:grid sm:gap-4 sm:grid-cols-2">
        <div className="">
          <hr className="border-1 border-stone-600 mb-6" width="50%" />
          <h5 className="font-bold text-xl">Cocok untuk siapa?</h5>
        </div>
        <div className="mt-4 sm:mt-0">
          <p className="leading-loose">
            Cocok untuk anak-anak, Saloka Theme Park merupakan tempat rekreasi
            yang menyediakan aneka wahana. Mengusung konsep kearifan lokal,
            Saloka didirikan di atas lahan seluas 12 hektare.
          </p>
          <img
            className="mt-28 sm:mt-12"
            src="https://salokapark.com/build/assets/tentang_image.cec428ce.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="sm:flex sm:mt-36 mt-12 sm:grid sm:gap-4 sm:grid-cols-2">
        <div className="">
          <hr className="border-1 border-stone-600 mb-6" width="50%" />
          <h5 className="font-bold text-xl">Ada berapa wahana?</h5>
        </div>
        <div className="mt-4 sm:mt-0">
          <p className="leading-loose">
            Total wahana di tempat ini ada 25 wahana yang terbagi menjadi 5 zona
            permainan. Selain wahana permainan, kamu juga bisa menikmati
            pertunjukan Baru Klinthing dan menikmati kuliner di restoran dalam
            Saloka.
          </p>
        </div>
      </div>
    </SalokaLayout>
  );
};

export default SalokaPage;
