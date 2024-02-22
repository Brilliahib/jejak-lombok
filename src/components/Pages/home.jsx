import HomeLayout from "../Layouts/HomeLayouts";
import ExploreSection from "../Layouts/ExploreSection";
import LoliBotSection from "../Layouts/LoliBotSection";
import TestimoniSection from "../Layouts/TestimoniSection";

const HomePage = () => {
  return (
    <HomeLayout>
      <ExploreSection />
      <TestimoniSection />
      <LoliBotSection />
    </HomeLayout>
  );
};

export default HomePage;
