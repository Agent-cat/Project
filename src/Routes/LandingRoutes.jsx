import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Homelanding from "../Pages/Homelanding";

const LandingRoutes = ({
  properties,
  setIsLandingPage,
  setUserInfo,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Homelanding
            properties={properties}
            setIsLandingPage={setIsLandingPage}
          />
        }
      />
      <Route
        path="/signin"
        element={
          <Signin
            setIsLoggedIn={setIsLoggedIn}
            setUserInfo={setUserInfo}
            setIsLandingPage={setIsLandingPage}
          />
        }
      />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default LandingRoutes;
