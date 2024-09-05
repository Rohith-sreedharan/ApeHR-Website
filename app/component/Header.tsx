import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const switchTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <header className="bg-gray-900 text-white">
      <div className="mx-5 ml-12 px-4 py-3 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src="/icon.png" alt="ApeHr" className="w-8 h-8" />
          <span className="text-lg font-semibold">ApeHr</span>
          {/* Navigation */}
          <nav className="hidden md:flex space-x-5 px-4 ">
            <a href="#" className="hover:text-gray-300">
              Templates
            </a>
            <a href="#" className="hover:text-gray-300">
              Sections
            </a>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-300">
              Roadmap
            </a>
            <a href="#" className="hover:text-gray-300">
              Discord
            </a>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-400 hover:text-white focus:outline-none">
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
        </div>

        {/* Search, Theme Toggle, and Login */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={switchTheme}
            className={`${isDarkMode ? "text-white" : "text-gray-400"} bg-gray-800 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>

          <button className="hidden hover:opacity-75 peer-out-of-range: md:block bg-gray-700 py-1.5 px-5 rounded">
            Login
          </button>
          <button className="bg-white hover:opacity-75 text-black px-4 py-2 rounded-md ">
            Get ApeHR Pro
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <nav className="flex flex-col space-y-2 mt-2 px-4">
          <a href="#" className="hover:text-gray-300">
            Templates
          </a>
          <a href="#" className="hover:text-gray-300">
            Sections
          </a>
          <a href="#" className="hover:text-gray-300">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-300">
            Roadmap
          </a>
          <a href="#" className="hover:text-gray-300">
            Discord
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
