import React, { useState, useEffect } from "react";
import { SidebarLinks } from "../Constants/Constants";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Sidebar = ({ darkMode, isSidebarOpen, setIsSidebarOpen }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDarkMode(darkMode);
    }, 1);

    return () => clearTimeout(timer);
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside
      className={`md:w-60 ${
        isSidebarOpen ? "w-16" : "w-0"
      } mt-11 rounded-2xl font-bold flex flex-col flex-nowrap ml-3 items-center h-full transition-all duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } relative`}
    >
      <button
        onClick={toggleSidebar}
        className={`md:hidden absolute -right-5 -top-8 bg-blue-500 text-white p-2 rounded-full transition-all duration-300 ${
          isSidebarOpen ? "" : "-right-10"
        }`}
      >
        {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
      {isSidebarOpen &&
        SidebarLinks.map((link, value) => (
          <React.Fragment key={value}>
            <NavLink
              className={({ isActive }) =>
                `w-full px-2 md:px-5 shrink-0 py-4 rounded-xl mb-2 text-xl font-bold flex items-center justify-center transition-colors duration-300 ${
                  isActive
                    ? isDarkMode
                      ? "bg-blue-900 text-blue-300"
                      : "bg-blue-100 text-blue-600"
                    : isDarkMode
                    ? "text-gray-300 hover:bg-blue-900 hover:text-blue-300"
                    : "text-gray-500 hover:bg-blue-100 hover:text-blue-600"
                }`
              }
              to={link.link}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              data-tooltip-id={`tooltip-${link.name}`}
              data-tooltip-content={link.name}
            >
              <div className="flex items-center gap-4">
                {link.icon}
                <span className="hidden md:inline">{link.name}</span>
              </div>
            </NavLink>
            <Tooltip
              id={`tooltip-${link.name}`}
              place="right"
              effect="solid"
              className={`md:hidden transition-opacity duration-300 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200"
                  : "bg-white text-gray-800"
              } z-50`}
            />
          </React.Fragment>
        ))}
    </aside>
  );
};

export default Sidebar;
