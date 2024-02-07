import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Pages/home.jsx";
import SalokaPage from "./components/Pages/CardDetailPage/saloka.jsx";
import GedongSongoPage from "./components/Pages/CardDetailPage/gedongsongo.jsx";
import KotaLamaPage from "./components/Pages/CardDetailPage/kotalama.jsx";
import SampokongPage from "./components/Pages/CardDetailPage/sampokong.jsx";
import DestinationPage from "./components/Pages/destination.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/destination",
    element: <DestinationPage />,
  },
  {
    path: "/get-to-know/saloka-park",
    element: <SalokaPage></SalokaPage>,
  },
  {
    path: "/get-to-know/candi-gedong-songo",
    element: <GedongSongoPage />,
  },
  {
    path: "/get-to-know/kota-lama",
    element: <KotaLamaPage />,
  },
  {
    path: "/get-to-know/sampokong",
    element: <SampokongPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
