import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ userInfo, darkMode, setDarkMode, isLoggedIn }) => {
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
      <Link
        to="/"
        className="md:text-2xl text-3xl text-gray-600 dark:text-gray-300 font-bold ml-10 md:ml-10"
      >
        <span className=" flex gap-2 items-center text-blue-600">
          Midland <h1 className="hidden text-gray-400 md:block">Real-Estate</h1>
        </span>
      </Link>
      <div className="md:flex hidden items-center bg-gray-200 rounded-full p-1">
        <button
          className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
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
        <Link
          to="/signin"
          className="px-4 py-2 font-bold text-xl text-blue-600 dark:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 text-xl bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
