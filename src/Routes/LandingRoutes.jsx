import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Homelanding from "../Pages/Homelanding";

const LandingRoutes = ({ properties }) => {
  return (
    <Routes>
      <Route path="/" element={<Homelanding properties={properties} />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default LandingRoutes;
