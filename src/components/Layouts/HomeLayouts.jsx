import Footer from "../Elements/Footer";
import Navbar from "../Elements/Navbar";
import Jumbotron from "./JumbotronSection";
import OrganizeTripSection from "./OrganizeTripSection";

const HomeLayout = (props) => {
  const { children } = props;
  return (
    <div className="">
      <Navbar></Navbar>
      <Jumbotron />
      <OrganizeTripSection />
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
