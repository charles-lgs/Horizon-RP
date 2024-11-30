import { createBrowserRouter } from "react-router-dom";
import Banner from "../components/Banner.tsx";
// import Footer from "../components/Footer.tsx";

// import img from "../assets/images/background7.jpg";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-container">
        <Banner />
        <main>
          <div className="container-image">
            {/* <img className="image" src={img}></img> */}
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    ),
  },
  {
    path: "/penal-code",
    element: (
      <div className="main-container">
        <Banner />
        <main></main>
        {/* <Footer /> */}
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div className="main-container">
        <Banner />
        <main></main>
        {/* <Footer /> */}
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div className="main-container">
        <Banner />
        <main></main>
        {/* <Footer /> */}
      </div>
    ),
  },
]);

export default router;
