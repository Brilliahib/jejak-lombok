import Footer from "../Elements/Footer";
import Navbar from "../Elements/Navbar";
import Jumbotron from "./JumbotronSection";
import OrganizeTripSection from "./OrganizeTripSection";
import TestimoniSection from "./TestimoniSection";

const HomeLayout = (props) => {
  const { children } = props;
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="overflow-hidden">
        <Jumbotron />
        <OrganizeTripSection />
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
