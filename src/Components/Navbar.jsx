import React, { useState, useEffect } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="w-full h-full flex justify-between items-center bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="md:text-4xl text-3xl text-gray-600 dark:text-gray-300 font-bold ml-10 md:ml-20">
        <span className="">Find </span> Home
      </div>
      <div className="md:flex hidden items-center bg-gray-200 rounded-full p-1">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !darkMode ? "bg-white text-gray-800 shadow" : "text-gray-600"
          }`}
          onClick={() => setDarkMode(false)}
        >
          Light mode
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            darkMode ? "bg-gray-800 text-white shadow" : "text-gray-600"
          }`}
          onClick={() => setDarkMode(true)}
        >
          Dark
        </button>
      </div>

      <div className="flex gap-2 items-center mr-6">
        <button className="px-4 py-2 font-bold text-xl text-blue-600 dark:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          Login
        </button>
        <button className="px-4 py-2 text-xl bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
