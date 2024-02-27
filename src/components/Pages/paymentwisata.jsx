import Footer from "../Elements/Footer";
import Navbar from "../Elements/Navbar";
import PaymentPaketWisata from "../Layouts/PaymentWisata";
import React, { useEffect } from "react";

const PaymentPage = () => {
  useEffect(() => {
    // Ketika komponen dimuat, scroll window ke paling atas
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <PaymentPaketWisata />
      <Footer />
    </div>
  );
};

export default PaymentPage;
