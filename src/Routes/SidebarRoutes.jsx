import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Settings from "../Pages/Settings";
import Messages from "../Pages/Messages";
import Favorites from "../Pages/Favorites";
import Discover from "../Pages/Discover";
import PropertyDetails from "../Components/PropertyDetails";
import ErrorPage from "../Components/ErrorPage";

const SidebarRoutes = ({ darkMode }) => {
  return (
    <Routes>
      <Route path="/" element={<Home darkMode={darkMode} />} />
      <Route path="/settings" element={<Settings darkMode={darkMode} />} />
      <Route path="/messages" element={<Messages darkMode={darkMode} />} />
      <Route path="/favorites" element={<Favorites darkMode={darkMode} />} />
      <Route path="/discover" element={<Discover darkMode={darkMode} />} />
      <Route
        path="/property/:id"
        element={<PropertyDetails darkMode={darkMode} />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default SidebarRoutes;
