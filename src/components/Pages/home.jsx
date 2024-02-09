import HomeLayout from "../Layouts/HomeLayouts";
import ExploreSection from "../Layouts/ExploreSection";
import { Helmet } from "react-helmet";
import OrganizeTripSection from "../Layouts/OrganizeTripSection";
import LoliBotSection from "../Layouts/LoliBotSection";

const HomePage = () => {
  return (
    <HomeLayout>
      <ExploreSection />
      <LoliBotSection />
    </HomeLayout>
  );
};

export default HomePage;
