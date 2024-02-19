import Navbar from "../Elements/Navbar";
import PaketWisataLayout from "../Layouts/PaketWisata";
import Footer from "../Elements/Footer";

const PaketWisataPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="header-content flex justify-content-center items-center w-full "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1496275068113-fff8c90750d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center bottom 50%",
        }}
      ></div>
      <PaketWisataLayout />
      <Footer />
    </div>
  );
};

export default PaketWisataPage;
