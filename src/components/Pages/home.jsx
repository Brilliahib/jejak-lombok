import HomeLayout from "../Layouts/HomeLayouts";
import ExploreSection from "../Layouts/ExploreSection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <HomeLayout>
      <Helmet>
        <title>Jejak Semarang</title>
      </Helmet>
      <ExploreSection />
    </HomeLayout>
  );
};

export default HomePage;
