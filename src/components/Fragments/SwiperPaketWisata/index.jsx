import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card";
import { Link } from "react-router-dom";
import "swiper/css/navigation"; // Mengimpor gaya navigasi Swiper
import { Navigation } from "swiper/modules"; // Mengimpor modul navigasi Swiper
import cardsData from "../../Layouts/DestinationSection/cardData.json";
import CardWisata from "../CardWisata";

export default () => {
  // Mengambil 4 data pertama dari cardsData
  const limitedData = cardsData.slice(0, 5);

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden", zIndex: 0 }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          // Breakpoints for responsive design
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        navigation={true} // Mengaktifkan navigasi
        style={{ zIndex: 0 }}
        modules={[Navigation]} // Menggunakan modul navigasi
        className="mySwiper rounded-xl"
      >
        {limitedData.map((card, index) => (
          <SwiperSlide key={index} className="rounded-xl">
            <CardWisata imageUrl={card.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
