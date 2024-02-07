import SampokongLayout from "../../Layouts/CardDetail/Sampokong";
import React, { useEffect } from "react";

const SampokongPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SampokongLayout>
      <div className="sm:flex mt-12 sm:grid sm:gap-4 sm:grid-cols-2">
        <div className="">
          <hr className="border-1 border-stone-600 mb-6" width="50%" />
          <h5 className="font-bold text-xl">
            Dimana wisata bersejarah di Semarang?
          </h5>
        </div>
        <div className="mt-4 sm:mt-0">
          <p className="leading-loose">
            Kalau kamu ingin berwisata sejarah di Semarang, maka Kelenteng Sam
            Poo Kong adalah tujuan yang tepat. Sebagai tempat ibadah untuk para
            penganut kepercayaan tradisional Tionghoa, Sam Poo Kong tampak
            begitu menarik.
          </p>
          <img
            className="mt-28 sm:mt-12"
            src="https://awsimages.detik.net.id/community/media/visual/2021/02/11/kelenteng-sam-poo-kong_43.jpeg?w=1200"
            alt=""
          />
        </div>
      </div>
      <div className="sm:flex sm:mt-36 mt-12 sm:grid sm:gap-4 sm:grid-cols-2">
        <div className="">
          <hr className="border-1 border-stone-600 mb-6" width="50%" />
          <h5 className="font-bold text-xl">Mengapa begitu?</h5>
        </div>
        <div className="mt-4 sm:mt-0">
          <p className="leading-loose">
            Sebab, bangunan kelenteng tersebut dibuat dengan arsitektur khas
            Cina yang dipadukan dengan budaya Jawa. Tempat ini juga menjadi
            jejak perjalanan Laksamana Cheng Ho, penjelajah Cina.
          </p>
        </div>
      </div>
    </SampokongLayout>
  );
};

export default SampokongPage;
