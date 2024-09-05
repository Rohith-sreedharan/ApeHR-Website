import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="mx-5 px-4 py-3 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src="/icon.png" alt="Magic UI Pro Logo" className="w-8 h-8" />
          <span className="text-lg font-semibold">Magic UI Pro</span>
          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
            Beta
          </span>
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
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              className="bg-gray-800 text-white pl-3 pr-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <button className="bg-gray-800 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>

          <button className="hidden md:block bg-gray-700 py-1.5 px-5 rounded">
            Login
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-md ">
            Get Magic UI Pro
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
