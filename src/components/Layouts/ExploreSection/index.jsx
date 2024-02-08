import SwiperCard from "../../Fragments/SwiperCard";

const ExploreSection = () => {
  return (
    <div className="mt-16 sm:mt-24 explore" style={{ marginTop: "-12rem" }}>
      <h1 className="text-4xl font-black leading-tight mb-8 tracking-wide text-white">
        Explore Popular Destination
      </h1>
      <SwiperCard></SwiperCard>
    </div>
  );
};

export default ExploreSection;
