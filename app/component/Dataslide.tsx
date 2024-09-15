import React from "react";
import { motion } from "framer-motion";

type HeroProps = {
  isDarkMode: boolean;
};

const Dataslide: React.FC<HeroProps> = ({ isDarkMode }) => {
  const bgColor = isDarkMode ? "bg-black" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const labelColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const barBgColor = isDarkMode ? "bg-gray-700" : "bg-gray-200";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={`p-8 ${bgColor} ${textColor}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <motion.div variants={itemVariants}>
          <h2 className="text-lg font-semibold mb-4">
            How many employees does your company have?
          </h2>
          <div className="cursor-pointer space-y-7">
            {[
              { label: "51 - 200", percentage: "38%", color: "bg-green-400" },
              { label: "201 - 500", percentage: "23%", color: "bg-green-400" },
              { label: "11 - 50", percentage: "16%", color: "bg-green-400" },
              { label: "501 - 1000", percentage: "12%", color: "bg-green-400" },
              { label: "1001 - 5000", percentage: "8%", color: "bg-green-400" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex mb-1">
                  <span className={`text-sm font-medium ${labelColor} w-24`}>
                    {item.label}
                  </span>
                  <span
                    className={`text-sm sm:font-semibold ml-[40%] font-medium ${labelColor} flex-grow text-center`}
                  >
                    {item.percentage}
                  </span>
                </div>
                <motion.div
                  className={`w-[80%] ${barBgColor} rounded-full h-2.5`}
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    className={`${item.color} h-2.5 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: item.percentage }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div variants={itemVariants}>
          <h2 className="text-lg font-semibold mb-4">
            On average, how many new employees do you hire a year?
          </h2>
          <div className="grid grid-cols-2">
            <div className="cursor-pointer mt-4 flex flex-col justify-center gap-4 text-sm">
              {[
                "Less than 100",
                "100-499 new hires",
                "1,000-9,999 new hires",
                "10,000+ new hires",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className={`inline-block w-3 h-3 ${
                      [
                        "bg-yellow-400",
                        "bg-red-400",
                        "bg-green-400",
                        "bg-blue-400",
                      ][index]
                    } mr-2`}
                  ></span>
                  {text}
                </motion.div>
              ))}
            </div>
            <div className="relative w-60 h-64">
              <motion.svg
                viewBox="0 0 36 36"
                className="w-full h-full"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <circle
                  cx="18"
                  cy="18"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke={isDarkMode ? "#4B5563" : "#e6e6e6"}
                  strokeWidth="3.8"
                ></circle>
                {[
                  { color: "#fbbf24", dasharray: "25 100", offset: "0" },
                  { color: "#f87171", dasharray: "27 100", offset: "-25" },
                  { color: "#34d399", dasharray: "17 100", offset: "-52" },
                  { color: "#60a5fa", dasharray: "3 100", offset: "-69" },
                ].map((circle, index) => (
                  <motion.circle
                    key={index}
                    cx="18"
                    cy="18"
                    r="15.91549430918954"
                    fill="transparent"
                    stroke={circle.color}
                    strokeWidth="3.8"
                    strokeDasharray={circle.dasharray}
                    strokeDashoffset={circle.offset}
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: circle.offset }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.circle>
                ))}
              </motion.svg>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">24%</div>
                  <div className="text-sm">Less than 100</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dataslide;
