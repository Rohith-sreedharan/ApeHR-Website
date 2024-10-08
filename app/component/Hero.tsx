import React, { FC } from "react";
import { motion } from "framer-motion";
import Particles from "@/components/magicui/particles";
import { ChevronRight } from "lucide-react"; // Importing for the updated AnimatedGradientTextDemo
import { cn } from "@/lib/utils"; // Importing for the updated AnimatedGradientTextDemo
import AnimatedGradientText from "@/components/magicui/animated-gradient-text"; // Importing for the updated AnimatedGradientTextDemo

type HeroProps = {
  isDarkMode: boolean;
  setDisplayCountdown: (value: boolean) => void;
};

const imageUrls = [
  "https://res.cloudinary.com/djnvtmphi/image/upload/v1727768249/aiai9zngbgjuwrs7lgij.jpg",
  "https://res.cloudinary.com/djnvtmphi/image/upload/v1727863237/ojumhgv7lxkkobee40ks.jpg",
  "https://res.cloudinary.com/djnvtmphi/image/upload/v1727863249/sp7jawgvqvkfxjekyud4.jpg",
  "https://res.cloudinary.com/djnvtmphi/image/upload/v1727863434/rzhpbrb4mvjufwpssrgh.jpg",
  "https://res.cloudinary.com/djnvtmphi/image/upload/v1727863434/rzhpbrb4mvjufwpssrgh.jpg",
  "https://res.cloudinary.com/djnvtmphi/image/upload/v1727863524/dndvnenryumaatzokhke.jpg",
];

const AnimatedGradientTextDemo = () => {
  return (
    <div className="z-10 flex min-h-[10rem] items-center justify-center">
      <AnimatedGradientText>
        🎉
        <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%_100%] animate-gradient" />
        <span
          className={cn(
            `inline text-[100%] animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Introducing Professional ATC
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
};

const LandingPage: FC<HeroProps> = ({ isDarkMode, setDisplayCountdown }) => {
  return (
    <div className="bg-white relative dark:bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Top banner */}
      <div
        className={`absolute z-0 top-0 left-0 w-full h-1/4 ${
          isDarkMode ? "bg-gradient-radial-dark" : "bg-gradient-radial-light"
        }`}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <a href="#">
          <AnimatedGradientTextDemo /> {/* Updated component call */}
        </a>
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="z-50 text-center max-w-4xl"
      >
        <h1 className="text-3xl sm:text-4xl tracking-wide leading-relaxed md:text-5xl text-black dark:text-white font-bold mb-6">
          From Manual to Automatic Revolutionizing HR One Click at a Time
        </h1>
        <p className="text-gray-400 mb-8 text-sm sm:text-base">
          A new generation platform for your recruitment processes
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDisplayCountdown(true)}
            className="dark:bg-white bg-purple-600 text-white dark:text-black px-6 py-3 rounded-lg font-semibold text-sm sm:text-base"
          >
            Get ApeHr Pro ›
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-6 py-3 rounded-md font-semibold text-sm sm:text-base"
            onClick={() => setDisplayCountdown(true)}
          >
            Start Free Trial ›
          </motion.button>
        </motion.div>

        {/* User avatars and rating */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center mb-8 space-y-4 sm:space-y-0"
        >
          <div className="flex -space-x-3 sm:-space-x-5 mr-0 sm:mr-4 mb-2 sm:mb-0">
            {imageUrls.map((url, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                className="w-8 h-8 sm:w-11 sm:h-10 rounded-full border-2 dark:border-white border-black"
                src={url}
                alt={`User Avatar ${i + 1}`}
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
              1,000+ companies will love using us
            </p>
          </div>
        </motion.div> */}
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
      <Particles
        className="absolute inset-0 text-black dark:text-white"
        quantity={100}
        ease={80}
        size={0.8}
        color={isDarkMode ? "#ffffff" : "#000000"}
      />
    </div>
  );
};

export default LandingPage;
