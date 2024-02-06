import Navbar from "../../../Elements/Navbar";

const KotaLamaLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-12 sm:mt-36 card-detail">
        <h1 className="text-center font-bold text-3xl mb-12 sm:text-6xl">
          Kota Lama
        </h1>
        <img
          src="https://pariwisata.semarangkota.go.id/backend/web/upload/berita/1687174029_kota-lama-semarang.jpg"
          alt=""
          height={100}
        />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default KotaLamaLayout;
