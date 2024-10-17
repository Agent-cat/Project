import React, { useEffect, useState } from "react";
import LayoutPage from "./Pages/LayoutPage";
import LandingPage from "./Pages/LandingPage";
import axios from "axios";

const App = () => {
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [properties, setProperties] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/properties");
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="w-full select-none h-screen bg-white">
      {isLandingPage ? (
        <LandingPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          properties={properties}
          setIsLandingPage={setIsLandingPage}
        />
      ) : (
        <LayoutPage properties={properties} setProperties={setProperties} />
      )}
    </div>
  );
};

export default App;
