import Navbar from "../../../Elements/Navbar";

const SalokaLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-12 sm:mt-36 card-detail">
        <h1 className="text-center font-bold text-3xl mb-12 sm:text-6xl">
          Saloka Theme Park
        </h1>
        <img
          src="https://image.popbela.com/content-images/post/20221231/aeb4887bbe72abfa998025495ac9d7bd.png?width=1600&format=webp&w=1600"
          alt=""
          height={100}
        />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SalokaLayout;
