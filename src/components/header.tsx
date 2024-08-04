"use client";

import React from "react";
import { useTheme } from "./theme-switch";
import { CiDark, CiLight } from "react-icons/ci";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="container fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-30 transition-colors duration-300">
      <div className="container mx-auto my-3">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-2xl px-2 font-bold text-black dark:text-white transition-colors duration-300"
          >
            Grace <span className="text-purple-400">Karin</span>
          </a>
          <div className="flex">
            <button
              className="p-3 mx-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500 shadow-md hover:shadow-lg hover:scale-110"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? (
                <CiDark className="w-5 h-5 text-gray-800" />
              ) : (
                <CiLight className="w-5 h-5 text-yellow-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
