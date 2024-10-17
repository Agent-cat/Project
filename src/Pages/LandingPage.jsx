import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import LandingRoutes from "../Routes/LandingRoutes";

const LandingPage = ({
  properties,
  setIsLandingPage,
  userInfo,
  setUserInfo,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="w-full flex-col overflow-hidden h-screen flex bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="h-[10%] w-full">
        <Navbar
          isLoggedIn={isLoggedIn}
          userInfo={userInfo}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
      <div className="flex h-[90%] w-full">
        <LandingRoutes
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          properties={properties}
          setIsLandingPage={setIsLandingPage}
          setUserInfo={setUserInfo}
        />
      </div>
    </div>
  );
};

export default LandingPage;
