import Card from "../../Fragments/Card";
import React, { useState, useEffect, useRef } from "react";

const DestinationLayout = () => {
  const popupRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const cardsData = [
    {
      imageUrl:
        "https://1.bp.blogspot.com/-FqVl7Vo_MB8/XUci97z17GI/AAAAAAAACS0/ia8p-W-weZUGNEKkQ7n8J_ekUVAQ2nfCQCLcBGAs/s1600/harga-tiket-masuk-wisata-candi-gedong-songo-terbaru-2019.jpg",
      title: "Candi Gedong Songo",
      description:
        "Tempat wisata di Semarang yang lagi hits dan harganya ini menjadi wisata alam sekaligus wisata sejarah. Sebab, Candi Gedong Songo terletak di kaki Gunung Ungaran dengan ketinggian 1200 mdpl. Dengan ketinggian tersebut, para wisatawan bisa menikmati udara sejuk sekaligus panorama alam yang menawan. ",
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.26874962715!2d110.33944737532003!3d-7.210151592795524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70874ef3f95a73%3A0x5331ed5ca2e4242a!2sGedong%20Songo%20Temple!5e0!3m2!1sen!2sid!4v1707302385197!5m2!1sen!2sid",
    },
    {
      imageUrl:
        "https://image.popbela.com/content-images/post/20221231/a2093aad5ef62c094359423bbc9997c5.png?width=1600&format=webp&w=1600",
      title: "Kota Lama",
      description:
        "Tempat wisata di Semarang yang lagi hits dan harganya pertama adalah Kota Lama Semarang. Destinasi pertama ini merupakan kawasan cagar budaya tempat gedung-gedung tua peninggalan Hindia Belanda ratusan tahun yang lalu. Arsitektur gedung di kawasan Kota Lama bergaya khas Eropa yang cocok sebagai tempat foto yang instagramable. ",
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3472231930523!2d110.42586177531781!3d-6.968301193032291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f35649aa5e89%3A0x36af9cb064c11968!2sOld%20Town%20Semarang!5e0!3m2!1sen!2sid!4v1707303316730!5m2!1sen!2sid",
    },
    {
      imageUrl:
        "https://wisatasekolah.com/wp-content/uploads/2019/03/wisata-edukasi-semarang.jpg",
      title: "Sampokong",
      description:
        "Kalau kamu ingin berwisata sejarah di Semarang, maka Kelenteng Sam Poo Kong adalah tujuan yang tepat. Sebagai tempat ibadah untuk para penganut kepercayaan tradisional Tionghoa, Sam Poo Kong tampak begitu menarik. Sebab, bangunan kelenteng tersebut dibuat dengan arsitektur khas Cina yang dipadukan dengan budaya Jawa.",
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1102111923933!2d110.39542507531804!3d-6.9962999930048735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b46faaaaaab%3A0xef7fe551fe13bd76!2sWisata%20Sam%20Poo%20Kong!5e0!3m2!1sen!2sid!4v1707303389830!5m2!1sen!2sid",
    },
    {
      imageUrl:
        "https://image.popbela.com/content-images/post/20221231/aeb4887bbe72abfa998025495ac9d7bd.png?width=1600&format=webp&w=1600",
      title: "Saloka Theme Park",
      description:
        "Cocok untuk anak-anak, Saloka Theme Park merupakan tempat rekreasi yang menyediakan aneka wahana. Mengusung konsep kearifan lokal, Saloka didirikan di atas lahan seluas 12 hektare. Total wahana di tempat ini ada 25 wahana yang terbagi menjadi 5 zona permainan.",
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.648573481264!2d110.45644907532039!3d-7.280766992726464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708265970e9af7%3A0xa572723ddf2098e6!2sSaloka%20Theme%20Park!5e0!3m2!1sen!2sid!4v1707303446327!5m2!1sen!2sid",
    },
    // Tambahkan card lainnya di sini jika diperlukan
  ];
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-24">
      <h1 className="font-extrabold text-3xl sm:text-4xl text-center mb-12 sm:mb-24">
        Rekomendasi <br />
        Destinasi Wisata
      </h1>
      <div className="destination-content">
        <div className="block sm:grid grid-cols-3 gap-x-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              onClick={() =>
                handleCardClick(
                  <div>
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="popup-image mt-10 rounded-xl"
                    />
                    <h6 className="font-bold text-2xl my-4">{card.title}</h6>
                    <p className="text-justify text-[#6F6F6F]">
                      {card.description}
                    </p>
                    <iframe
                      src={card.mapsUrl}
                      width="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="mt-10 z-100"
                    ></iframe>
                  </div>
                )
              }
              mt={index === 0 ? "mt-16 sm:mt-0" : ""}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="popup-container">
          <div
            className="popup"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <div className="popup-content">{popupContent}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationLayout;
