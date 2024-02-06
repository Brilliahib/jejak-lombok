import Navbar from "../../../Elements/Navbar";

const GedongSongoLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-12 sm:mt-36 card-detail">
        <h1 className="text-center font-bold text-3xl mb-12 sm:text-6xl">
          Candi Gedong Songo
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Gedong_Songo_III%2C_1211.jpg"
          alt=""
          height={100}
        />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default GedongSongoLayout;
