import SwiperCard from "../../Fragments/SwiperCard";

const ExploreSection = () => {
  return (
    <div className="mt-24">
      <hr className="border-1 border-stone-400 mb-6" width="30%" />
      <h1 className="font-extrabold text-4xl">
        Cari tahu tentang <br />
        Semarang
      </h1>
      <div className="mb-6 sm:mb-16 sm:mt-6 mt-4 arrow-destination">
        <a
          href="/destination"
          className="flex gap-2 h-100 align-items-center mt-1"
        >
          Lihat Semua{" "}
        </a>
      </div>
      <SwiperCard></SwiperCard>
    </div>
  );
};

export default ExploreSection;
