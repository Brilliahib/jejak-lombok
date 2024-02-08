import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import cardsData from "../../Layouts/DestinationSection/cardData.json"; // Mengimpor data dari file JSON

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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ zIndex: 0 }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper rounded-xl"
      >
        {limitedData.map((card, index) => (
          <SwiperSlide key={index} className="rounded-xl">
            <Link to="/destinasi" className="rounded-xl">
              <Card imageUrl={card.imageUrl} title={card.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
