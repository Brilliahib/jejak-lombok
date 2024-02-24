import HomeLayout from "../Layouts/HomeLayouts";
import ExploreSection from "../Layouts/ExploreSection";
import LoliBotSection from "../Layouts/LoliBotSection";
import TestimoniSection from "../Layouts/TestimoniSection";
import BeritaLayout from "../Layouts/BeritaSection";

const HomePage = () => {
  return (
    <HomeLayout>
      <ExploreSection />
      <TestimoniSection />
      <LoliBotSection />
      <BeritaLayout />
    </HomeLayout>
  );
};

export default HomePage;
