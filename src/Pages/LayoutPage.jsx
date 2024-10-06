import Sidebar from "../Components/Sidebar";
import React, { useState, useEffect } from "react";
import SidebarRoutes from "../Routes/SidebarRoutes";
import Navbar from "../Components/Navbar";
import { AnimatePresence } from "framer-motion";

const LayoutPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="flex h-[88%] w-full">
        <Sidebar
          darkMode={darkMode}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <AnimatePresence mode="wait">
          <SidebarRoutes darkMode={darkMode} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LayoutPage;
