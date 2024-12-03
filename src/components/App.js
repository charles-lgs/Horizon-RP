import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "../router/router";
import Loader from "./Loader.tsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
