import Navbar from "../../../Elements/Navbar";

const SalokaLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div
        className="header-content flex justify-content-center items-center w-full "
        style={{
          backgroundImage:
            "url(https://salokapark.com/build/assets/maps_banner.6be0135a.jpg)",
        }}
      ></div>
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-12 sm:mt-36 card-detail">
        <h1 className="text-center font-bold text-3xl mb-12 sm:text-6xl">
          Saloka Theme Park
        </h1>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SalokaLayout;
