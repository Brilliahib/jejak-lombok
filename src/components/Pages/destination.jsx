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
            "url(https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/destination-update-may-2019/semarang.jpg)",
        }}
      ></div>
      <DestinationLayout />
    </div>
  );
};

export default DestinationPage;
