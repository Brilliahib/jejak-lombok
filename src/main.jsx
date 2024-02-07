import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./components/Pages/home.jsx";
import SalokaPage from "./components/Pages/CardDetailPage/saloka.jsx";
import GedongSongoPage from "./components/Pages/CardDetailPage/gedongsongo.jsx";
import KotaLamaPage from "./components/Pages/CardDetailPage/kotalama.jsx";
import SampokongPage from "./components/Pages/CardDetailPage/sampokong.jsx";
import DestinationPage from "./components/Pages/destination.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/get-to-know/saloka-park" element={<SalokaPage />} />
        <Route
          path="/get-to-know/candi-gedong-songo"
          element={<GedongSongoPage />}
        />
        <Route path="/get-to-know/kota-lama" element={<KotaLamaPage />} />
        <Route path="/get-to-know/sampokong" element={<SampokongPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
