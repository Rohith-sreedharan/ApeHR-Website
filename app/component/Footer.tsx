import Link from "next/link";
import React from "react";
import { FC, useState } from "react";

type HeaderProps = {
  setDisplayCountdown: (value: boolean) => void;
  scrollToSecondSlide: () => void;
  scrollToPricing: () => void;
};

const Footer: FC<HeaderProps> = ({
  setDisplayCountdown,
  scrollToSecondSlide,
  scrollToPricing,
}) => {
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
                A new generation platform for your recruitment processes
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
          <div className="grid grid-cols-2 cursor-pointer sm:grid-cols-4 gap-8 lg:w-2/3">
            <div>
              <h3 className="font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    onClick={() => scrollToSecondSlide()}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToPricing()}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={() => setDisplayCountdown(true)}
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={() => setDisplayCountdown(true)}
                  >
                    Case Study
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://springreen.in/about/"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={() => setDisplayCountdown(true)}
                  >
                    Releases
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={() => setDisplayCountdown(true)}
                  >
                    Governance
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={() => setDisplayCountdown(true)}
                  >
                    Learn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    onClick={() => setDisplayCountdown(true)}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={() => setDisplayCountdown(true)}
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={() => setDisplayCountdown(true)}
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Social</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.instagram.com/Springreenoff/"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.linkedin.com/company/springreen"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.glassdoor.co.in/Overview/Working-at-Spring-Green-Lawn-Care-EI_IE666619.11,33.htm"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm0 2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                    </svg>
                    Glassdoor
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-800 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm pt-4">
          © 2024 ApeHr,<Link href="https://springreen.in/"> springreen.</Link>{" "}
          All rights reserved.
          <p className="text-sm text-gray-600">Release v0.1</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
