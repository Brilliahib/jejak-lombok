import CardPaketWisata from "../../Fragments/CardPaketWisata";

const PaketWisataLayout = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 sm:mt-24 mt-12 mb-12 px-8">
      <div>
        <h1 className="text-4xl font-black leading-normal mb-8 tracking-wide text-center">
          Paket Wisata
        </h1>
        <div className="card-content">
          <CardPaketWisata />
        </div>
      </div>
    </div>
  );
};

export default PaketWisataLayout;
