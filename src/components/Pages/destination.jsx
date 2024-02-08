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
            "url(https://plus.unsplash.com/premium_photo-1664117436363-1baaa57133b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>
      <DestinationLayout />
    </div>
  );
};

export default DestinationPage;
