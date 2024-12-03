import { createBrowserRouter } from "react-router-dom";
import Banner from "../components/Banner.tsx";
import BannerImage from "../components/BannerImage.tsx";
import LinksReglement from "../components/LinksReglement.tsx";
import LinksPenalCode from "../components/LinksPenalCode.tsx";
import PenalCode from "../components/PenalCode.tsx";
import Footer from "../components/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-container">
        <Banner />
        <main>
          <BannerImage />
        </main>
        <Footer />
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
        </main>
        <Footer />
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
