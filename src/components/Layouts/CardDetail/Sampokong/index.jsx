import Navbar from "../../../Elements/Navbar";

const SampokongLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div
        className="header-content flex justify-content-center items-center w-full "
        style={{
          backgroundImage:
            "url(https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/destination-update-may-2019/semarang.jpg)",
        }}
      ></div>
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-12 sm:mt-36 card-detail">
        <h1 className="text-center font-bold text-3xl mb-12 sm:text-6xl">
          Sampokong
        </h1>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SampokongLayout;
