import { createBrowserRouter } from "react-router-dom";

import App from "../app/App";

import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "about", element: <About /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);