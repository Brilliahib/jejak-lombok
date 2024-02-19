import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./components/Pages/home.jsx";
import DestinationPage from "./components/Pages/destination.jsx";
import ChatBotPage from "./components/Pages/chat.jsx";
import ShopPage from "./components/Pages/shop.jsx";
import AboutPage from "./components/Pages/about.jsx";
import PaymentPage from "./components/Pages/paymentwisata.jsx";
import PaymentStatus from "./components/Pages/paymentstatus.jsx";
import PaketWisataPage from "./components/Pages/paketwisata.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinasi" element={<DestinationPage />} />
        <Route path="/chat" element={<ChatBotPage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route
          path="/shop/paket-wisata/payment"
          element={<PaymentPage />}
        ></Route>
        <Route
          path="/shop/paket-wisata/payment/status"
          element={<PaymentStatus />}
        ></Route>
        <Route path="/shop/paket-wisata" element={<PaketWisataPage />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
