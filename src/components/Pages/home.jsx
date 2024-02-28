import HomeLayout from "../Layouts/HomeLayouts";
import ExploreSection from "../Layouts/ExploreSection";
import LoliBotSection from "../Layouts/LoliBotSection";
import TestimoniSection from "../Layouts/TestimoniSection";
import BeritaLayout from "../Layouts/BeritaSection";
import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    // Ketika komponen dimuat, scroll window ke paling atas
    window.scrollTo(0, 0);
  }, []);
  return (
    <HomeLayout>
      <ExploreSection />
      <TestimoniSection />
      <LoliBotSection />
    </HomeLayout>
  );
};

export default HomePage;
