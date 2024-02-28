import Footer from "../Elements/Footer";
import Navbar from "../Elements/Navbar";
import ButtonBotFixed from "../Fragments/ButtonBotFIxed";
import BeritaLayout from "./BeritaSection";
import Jumbotron from "./JumbotronSection";
import OrganizeTripSection from "./OrganizeTripSection";

const HomeLayout = (props) => {
  const { children } = props;
  return (
    <div className="">
      <Navbar></Navbar>
      <Jumbotron />
      <div className="overflow-hidden">
        <OrganizeTripSection />
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">{children}</div>
        <ButtonBotFixed />
        <BeritaLayout />
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
