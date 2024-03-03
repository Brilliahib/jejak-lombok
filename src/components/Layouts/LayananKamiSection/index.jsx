import CardLayanan from "../../Fragments/CardLayanan";

const LayananSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 sm:mt-24 sm:my-48 my-24 overflow-hidden">
      <div className="heading">
        <h1
          className="font-black text-4xl text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Layanan Kami
        </h1>
      </div>
      <div className="card-content-layanan py-12">
        <CardLayanan />
      </div>
    </div>
  );
};

export default LayananSection;
