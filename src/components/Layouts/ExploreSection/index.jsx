import Button from "../../Elements/Button";
import SwiperCard from "../../Fragments/SwiperCard";

const ExploreSection = () => {
  return (
    <div className="mt-16 sm:mt-24 explore" style={{ marginTop: "-12rem" }}>
      <div className="heading sm:flex sm:justify-between explore-heading">
        <h1 className="text-4xl font-black leading-tight mb-8 tracking-wide text-white">
          Eksplor destinasi populer Lombok!
        </h1>
        <Button to="/destinasi">Lihat Semua</Button>
      </div>
      <SwiperCard></SwiperCard>
    </div>
  );
};

export default ExploreSection;
