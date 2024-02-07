import Navbar from "../../../Elements/Navbar";

const KotaLamaLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div
        className="header-content flex justify-content-center items-center w-full "
        style={{
          backgroundImage:
            "url(https://pariwisata.semarangkota.go.id/backend/web/upload/wisata/1702998255_kotalama.jpg)",
        }}
      ></div>
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-12 sm:mt-36 card-detail">
        <h1 className="text-center font-bold text-3xl mb-12 sm:text-6xl">
          Kota Lama
        </h1>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default KotaLamaLayout;
