import HomeLayout from "../Layouts/HomeLayouts";
import ExploreSection from "../Layouts/ExploreSection";
import { Helmet } from "react-helmet";
import OrganizeTripSection from "../Layouts/OrganizeTripSection";

const HomePage = () => {
  return (
    <HomeLayout>
      <ExploreSection />
    </HomeLayout>
  );
};

export default HomePage;
