import React from "react";
import { motion } from "framer-motion";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
      {/* Top banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <a href="#">
          <AnimatedGradientText className="text-black dark:text-white">
            <span>🎉 Introducing Features Section</span>
          </AnimatedGradientText>
        </a>
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl text-black dark:text-white md:text-5xl font-bold mb-6">
          From Manual to Automatic Revolutionizing HR One Click at a Time
        </h1>
        <p className="text-gray-400 mb-8">
          30+ beautiful sections and templates built with React, Typescript,
          Tailwind CSS, and Framer Motion. Save thousands of hours, create a
          beautiful landing page, and convert your visitors into customers.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="dark:bg-white bg-purple-600 text-white dark:text-black px-6 py-3 rounded-full font-semibold"
          >
            Browse Templates ›
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            Get Magic UI Pro ›
          </motion.button>
        </motion.div>

        {/* User avatars and rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex -space-x-5 mr-4">
            {[...Array(5)].map((_, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                className="w-11 h-11 rounded-full border-2 dark:border-white border-black "
                src={`https://i.pravatar.cc/150?img=${i + 1}`}
                alt="User avatar"
              />
            ))}
          </div>
          <div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
              <span className="ml-2 text-black dark:text-white text-sm">
                5.0
              </span>
            </div>
            <p className="text-xs text-black dark:text-white font-bold">
              1,000+ developers making beautiful landing pages
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Chat widget */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-4 right-4"
      >
        {/* Chat widget button code here */}
      </motion.div>
    </div>
  );
};

export default LandingPage;
