import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}