import Footer from "../Elements/Footer";
import Navbar from "../Elements/Navbar";
import PaymentStatusLayout from "../Layouts/PaymentStatusWaiting";

const PaymentStatus = () => {
  return (
    <div>
      <Navbar />
      <PaymentStatusLayout />
      <Footer />
    </div>
  );
};

export default PaymentStatus;
