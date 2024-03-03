import CardLayanan from "../../Fragments/CardLayanan";

const LayananSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 sm:mt-24 sm:my-24 my-12 overflow-hidden">
      <div className="heading">
        <p
          className="text-base uppercase font-semibold text-sky-700 tracking-wider leading-loose mb-2"
          data-aos="fade-right"
          data-aos-once="false"
          data-aos-duration="1000"
        >
          LAYANAN KAMI
        </p>
        <h1
          className="font-black text-4xl"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Hadir Untuk Perjalanan Anda
        </h1>
      </div>
      <div className="card-content-layanan py-12">
        <CardLayanan />
      </div>
    </div>
  );
};

export default LayananSection;
