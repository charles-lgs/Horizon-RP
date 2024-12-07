import { createBrowserRouter } from "react-router-dom";
import Banner from "../components/Banner.tsx";
import BannerImage from "../components/BannerImage.tsx";
import AboutHome from "../components/AboutHome.tsx";
import LinksReglement from "../components/LinksReglement.tsx";
import Reglement from "../components/Reglement.tsx";
import LinksPenalCode from "../components/LinksPenalCode.tsx";
import PenalCode from "../components/PenalCode.tsx";
import Footer from "../components/Footer.tsx";
import ScrollToTop from "../components/ScrollToTop.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-container">
        <Banner />
        <main>
          <BannerImage />
          <AboutHome />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    ),
  },
  {
    path: "/règlement",
    element: (
      <div className="main-container">
        <Banner />
        <main>
          <LinksReglement />
          <Reglement />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    ),
  },
  {
    path: "/penal-code",
    element: (
      <div className="main-container">
        <Banner />
        <main>
          <LinksPenalCode />
          <PenalCode />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div className="main-container">
        <Banner />
        <main></main>
        <Footer />
        <ScrollToTop />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div className="main-container">
        <Banner />
        <main></main>
        <Footer />
      </div>
    ),
  },
]);

export default router;
