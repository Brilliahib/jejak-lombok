import Navbar from "../../../Elements/Navbar";

const GedongSongoLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div
        className="header-content flex justify-content-center items-center w-full "
        style={{
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/c/c5/Gedong_Songo_III%2C_1211.jpg)",
        }}
      ></div>
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-12 sm:mt-24 card-detail">
        <div>
          <h1 className="font-bold text-3xl mb-12 sm:text-6xl">
            Candi Gedong Songo
          </h1>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default GedongSongoLayout;
