import HomeLayout from "../Layouts/HomeLayouts";
import ExploreSection from "../Layouts/ExploreSection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <HomeLayout>
      <Helmet>
        <title>Jejak Semarang</title>
        <link
          rel="icon"
          href="../../../assets/img/JEJAK_LOGO.png"
          type="image/png"
        />
      </Helmet>
      <ExploreSection />
    </HomeLayout>
  );
};

export default HomePage;
