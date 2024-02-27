import Footer from "../Elements/Footer";
import Navbar from "../Elements/Navbar";
import PaymentStatusLayout from "../Layouts/PaymentStatusWaiting";
import React, { useEffect } from "react";

const PaymentStatus = () => {
  useEffect(() => {
    // Ketika komponen dimuat, scroll window ke paling atas
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <PaymentStatusLayout />
      <Footer />
    </div>
  );
};

export default PaymentStatus;
