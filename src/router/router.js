import { createBrowserRouter } from "react-router-dom";
import Banner from "../components/Banner.tsx";
import BannerImage from "../components/BannerImage.tsx";
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
    path: "/penal-code",
    element: (
      <div className="main-container">
        <Banner />
        <main></main>
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
