import HomeLayout from "../Layouts/HomeLayouts";
import ExploreSection from "../Layouts/ExploreSection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <HomeLayout>
      <ExploreSection />
    </HomeLayout>
  );
};

export default HomePage;
