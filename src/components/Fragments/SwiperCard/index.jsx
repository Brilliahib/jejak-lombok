import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default () => {
  const cardsData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1594235206666-19245d362ffa?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570971839591-9934cad91963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://www.laughtraveleat.com/wp-content/uploads/2023/01/east-coast-gili-trawangan-lombok-indonesia-laugh-travel-eat.jpg",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1581775231124-4f70b143b85c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Tambahkan card lainnya di sini jika diperlukan
  ];
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
            slidesPerView: 3.5,
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
        className="mySwiper"
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <Link to="/destinasi">
              <Card imageUrl={card.imageUrl} title={card.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
