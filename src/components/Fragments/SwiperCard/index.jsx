import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card";

export default () => {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden", zIndex: 0 }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.25}
        breakpoints={{
          // Breakpoints for responsive design
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ zIndex: 0 }}
      >
        <SwiperSlide>
          <Card imageUrl="https://turisma.co.id/wp-content/uploads/2020/04/Wisata-Kota-Semarang-Di-Mesuem-Lawang-Sewu-1.jpg">
            <h6 className="font-bold text-2xl my-4">Simpang Lima</h6>
            <p className="text-justify text-[#6F6F6F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe
              quod excepturi eveniet omnis amet id, fuga assumenda odit deleniti
              fugit enim culpa quibusdam nulla modi aperiam earum sequi
              perspiciatis.
            </p>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card imageUrl="https://1.bp.blogspot.com/-FqVl7Vo_MB8/XUci97z17GI/AAAAAAAACS0/ia8p-W-weZUGNEKkQ7n8J_ekUVAQ2nfCQCLcBGAs/s1600/harga-tiket-masuk-wisata-candi-gedong-songo-terbaru-2019.jpg">
            <h6 className="font-bold text-2xl my-4">Candi Gedong Songo</h6>
            <p className="text-justify text-[#6F6F6F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe
              quod excepturi eveniet omnis amet id, fuga assumenda odit deleniti
              fugit enim culpa quibusdam nulla modi aperiam earum sequi
              perspiciatis.
            </p>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card imageUrl="https://wisatasekolah.com/wp-content/uploads/2019/03/wisata-edukasi-semarang.jpg">
            <h6 className="font-bold text-2xl my-4">Sampokong</h6>
            <p className="text-justify text-[#6F6F6F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe
              quod excepturi eveniet omnis amet id, fuga assumenda odit deleniti
              fugit enim culpa quibusdam nulla modi aperiam earum sequi
              perspiciatis.
            </p>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card imageUrl="https://beritajateng.tv/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-15-at-19.04.13.jpeg">
            <h6 className="font-bold text-2xl my-4">Curug Lawe</h6>
            <p className="text-justify text-[#6F6F6F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe
              quod excepturi eveniet omnis amet id, fuga assumenda odit deleniti
              fugit enim culpa quibusdam nulla modi aperiam earum sequi
              perspiciatis.
            </p>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
