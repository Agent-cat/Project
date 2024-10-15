import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Settings from "../Pages/Settings";
import Messages from "../Pages/Messages";
import Favorites from "../Pages/Favorites";
import Discover from "../Pages/Discover";
import PropertyDetails from "../Components/PropertyDetails";
import ErrorPage from "../Components/ErrorPage";
import Feedback from "../Pages/Feedback";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";

const SidebarRoutes = ({ darkMode, properties, setProperties }) => {
  return (
    <Routes>
      <Route path="/" element={<Home darkMode={darkMode} />} />
      <Route path="/settings" element={<Settings darkMode={darkMode} />} />
      <Route path="/messages" element={<Messages darkMode={darkMode} />} />
      <Route path="/favorites" element={<Favorites darkMode={darkMode} />} />
      <Route path="/feedback" element={<Feedback darkMode={darkMode} />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/discover"
        element={
          <Discover
            setProperties={setProperties}
            properties={properties}
            darkMode={darkMode}
          />
        }
      />
      <Route
        path="/property/:id"
        element={
          <PropertyDetails properties={properties} darkMode={darkMode} />
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default SidebarRoutes;
