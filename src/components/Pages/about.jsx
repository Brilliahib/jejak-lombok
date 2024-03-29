import React, { useEffect } from "react";
import Footer from "../Elements/Footer";
import Navbar from "../Elements/Navbar";
import ButtonBotFixed from "../Fragments/ButtonBotFIxed";
import AboutLayout from "../Layouts/About";

const AboutPage = () => {
  useEffect(() => {
    // Ketika komponen dimuat, scroll window ke paling atas
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="header-content flex justify-content-center items-center w-full "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558089551-95d707e6c13c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <AboutLayout />
      <ButtonBotFixed />
      <Footer />
    </div>
  );
};

export default AboutPage;
