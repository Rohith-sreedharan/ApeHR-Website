import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-gray-800 dark:text-white py-12 px-4 md:px-8 relative">
      <hr className="border-gray-200 dark:border-gray-800 border-2 absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mb-12">
          {/* Logo and newsletter subscription */}
          <div className="mb-12 lg:mb-0 lg:w-1/3">
            <div className="mb-8">
              <a className="flex items-center gap-2" href="/">
                <img
                  src="/apehr-logo.png"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl"
                  alt="APE HR Logo"
                />
                <span className="text-gray-900 dark:text-white text-xl sm:text-2xl lg:text-4xl font-bold">
                  APE HR
                </span>
              </a>
              <p className="mt-4 max-w-xs text-gray-600 dark:text-gray-400 text-sm">
                Identify and fix slow code–in minutes, not months.
              </p>
            </div>
            <div className="max-w-xs ">
              <h3 className="text-lg font-semibold mb-4">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Stay updated on new releases and features, guides, and case
                studies.
              </p>
              <form className="flex flex-col sm:flex-row max-w-sm w-full">
                <input
                  type="email"
                  placeholder="you@domain.com"
                  className="bg-gray-100 dark:bg-black border text-gray-900 dark:text-white px-4 py-3 rounded-t-md sm:rounded-l-md sm:rounded-t-none flex-grow w-full sm:w-auto mb-2 sm:mb-0"
                />
                <button
                  type="submit"
                  className="bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-b-md sm:rounded-r-md sm:rounded-b-none w-full sm:w-auto font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:w-2/3">
            <div>
              <h3 className="font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Learn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Showcase
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Next.js Conf
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">More</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Next.js Commerce
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Contact Sales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Releases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Telemetry
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Governance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">About Vercel</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Next.js + Vercel
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Open Source Software
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    X
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-800 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm pt-4">
        © 2024 ApeHr, springreen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
