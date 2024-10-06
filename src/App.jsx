import React, { useEffect, useState } from "react";
import LayoutPage from "./Pages/LayoutPage";
import LandingPage from "./Pages/LandingPage";
import axios from "axios";
const App = () => {
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const prorperties = async () => {
      await axios.get("http://localhost:4000/api/properties").then((res) => {
        setProperties(res.data);
        console.log(properties);
      });
    };
    prorperties();
  }, []);

  return (
    <div className="w-full select-none h-screen bg-white">
      {isLandingPage ? (
        <LandingPage setIsLandingPage={setIsLandingPage} />
      ) : (
        <LayoutPage />
      )}
    </div>
  );
};

export default App;
