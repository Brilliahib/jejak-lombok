import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./components/Pages/home.jsx";
import DestinationPage from "./components/Pages/destination.jsx";
import ChatBotPage from "./components/Pages/chat.jsx";
import ShopPage from "./components/Pages/shop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinasi" element={<DestinationPage />} />
        <Route path="/chat" element={<ChatBotPage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
