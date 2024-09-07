import { Moon, Sun } from "lucide-react";
import React, { FC, useState } from "react";

type HeaderProps = {
  isDarkMode: boolean;
  switchTheme: () => void;
};

const Header: FC<HeaderProps> = ({ isDarkMode, switchTheme }) => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  return (
    <header className="dark:bg-gray-900/50 dark:text-white sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-300 dark:border-gray-600 z-50">
      <div className="mx-5 ml-12 px-4 py-3 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src="/icon.png" alt="ApeHr" className="w-8 h-8" />
          <span className="text-lg font-semibold">ApeHr</span>
          {/* Navigation */}
          <nav className="hidden md:flex space-x-5 px-4">
            {["Templates", "Sections", "Pricing", "Roadmap", "Discord"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="md:hidden">
          <button
            className="text-gray-400 hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div> */}

        {/* Search, Theme Toggle, and Login */}
        <div className="flex items-center space-x-4">
          <button
            onClick={switchTheme}
            className="bg-slate-300 dark:bg-gray-800 p-2 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="bg-gray-300 dark:bg-gray-700 py-1.5 px-5 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors">
            Login
          </button>
          <button className="bg-black hidden md:flex dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:opacity-75 transition-opacity">
            Get ApeHR Pro
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800">
          <nav className="flex flex-col space-y-2 py-4 px-4">
            {["Templates", "Sections", "Pricing", "Roadmap", "Discord"].map((item) => (
              <a key={item} href="#" className="hover:text-gray-300 transition-colors">
                {item}
              </a>
            ))}
            <div className="flex items-center space-x-2 mt-4">
              <button
                onClick={switchTheme}
                className="bg-slate-300 dark:bg-gray-700 p-2 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="bg-gray-300 dark:bg-gray-700 py-1.5 px-5 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors  text-sm ">
                Login
              </button>
            </div>
            <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:opacity-75 transition-opacity text-sm w-40">
              Get ApeHR Pro
            </button>
          </nav>
        </div>
      )} */}
    </header>
  );
};

export default Header;
