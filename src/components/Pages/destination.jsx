import Footer from "../Elements/Footer";
import Navbar from "../Elements/Navbar";
import DestinationLayout from "../Layouts/DestinationSection";

const DestinationPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="header-content flex justify-content-center items-center w-full "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1597923432629-460225c5c26d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center bottom 30%",
        }}
      ></div>
      <DestinationLayout />
      <Footer />
    </div>
  );
};

export default DestinationPage;
