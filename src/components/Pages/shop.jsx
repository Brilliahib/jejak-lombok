import Footer from "../Elements/Footer";
import Navbar from "../Elements/Navbar";
import ShopLayout from "../Layouts/Shop";

const ShopPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="header-content flex justify-content-center items-center w-full "
        style={{
          backgroundImage:
            "url(https://titipku.com/blog/wp-content/uploads/2021/08/5df9e59f4c8b0.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center bottom 30%",
        }}
      ></div>
      <ShopLayout />
      <Footer />
    </div>
  );
};

export default ShopPage;
