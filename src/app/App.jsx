import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <Analytics />
      
      <ScrollToTop />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}