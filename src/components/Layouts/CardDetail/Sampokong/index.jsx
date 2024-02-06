import Navbar from "../../../Elements/Navbar";

const SampokongLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-12 sm:mt-36 card-detail">
        <h1 className="text-center font-bold text-3xl mb-12 sm:text-6xl">
          Sampokong
        </h1>
        <img
          src="https://www.djkn.kemenkeu.go.id/files/images/2021/10/122.jpeg"
          alt=""
          height={100}
        />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SampokongLayout;
