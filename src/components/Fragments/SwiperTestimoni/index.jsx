import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardTestimoni from "../CardTestimoni";
import "swiper/css/pagination";
import cardTestimoniData from "../../Fragments/CardTestimoni/cardTestimoniData.json";

// Import required modules
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default () => {
  // Mengambil 4 data pertama dari cardTestimoniData
  const limitedData = cardTestimoniData.slice(0, 6);

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden", zIndex: 0 }}>
      <Swiper
        spaceBetween={10}
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
          clickable: true, // Make pagination clickable
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard]}
        className="mySwiper mx-16"
      >
        {limitedData.map((testimoni, index) => (
          <SwiperSlide
            key={index}
            className="rounded-xl"
            style={{ cursor: "grab", color: "black" }}
          >
            <CardTestimoni testimoni={testimoni} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
