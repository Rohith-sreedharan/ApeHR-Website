import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ATSSurveyResultsProps {
  isDarkMode: boolean;
}

const ATSSurveyResults: React.FC<ATSSurveyResultsProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    { name: 'Ease and convenience of use', percentage: 63 },
    { name: 'Scheduling and tracking of candidate throughout the process', percentage: 54 },
    { name: 'Searching for candidates, resumes', percentage: 47 },
    { name: 'Career sites and other sourcing', percentage: 32 },
    { name: 'Data pull', percentage: 29 },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-6 lg:p-12 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}
    >
      <motion.div variants={itemVariants} className="space-y-6">
        <h2 className={`text-lg sm:text-xl lg:text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          How satisfied are you with the currently used applicant tracking system?
        </h2>
        <div className={`p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
          <div className="flex flex-col items-center mb-4 sm:mb-6">
            <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-r from-red-500 to-pink-500' : 'bg-gradient-to-r from-red-400 to-pink-400'} shadow-xl transform -rotate-12`}>
              <span className="text-3xl sm:text-4xl lg:text-5xl transform rotate-12">😞</span>
            </div>
            <div className={`mt-3 sm:mt-4 px-3 py-1 sm:px-4 sm:py-2 rounded-full ${isDarkMode ? 'bg-red-600' : 'bg-red-500'} text-white font-bold text-xs sm:text-sm uppercase tracking-wide`}>
              Critical Insight
            </div>
          </div>
          <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <span className="font-bold text-xl sm:text-2xl block mb-1 sm:mb-2">70%+</span>
            <span className="text-base sm:text-lg">of respondents are</span>
            <span className={`block text-lg sm:text-xl font-semibold mt-1 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
              dissatisfied or very dissatisfied
            </span>
            <span className="text-base sm:text-lg">with their current ATS</span>
          </p>
          <div className={`mt-4 sm:mt-6 pt-3 sm:pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <p className={`text-xs sm:text-sm text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Based on a 5-point satisfaction scale survey
            </p>
          </div>
        </div>
        <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          There were 5 options: very dissatisfied, dissatisfied, neutral, satisfied, very satisfied
        </p>
      </motion.div>
      
      <motion.div variants={itemVariants} className="space-y-6">
        <h2 className={`text-lg sm:text-xl lg:text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          What's the most important benefit of the ATS from your perspective? (Multiple selection)
        </h2>
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={`text-xs sm:text-sm flex-1 pr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{benefit.name}</span>
                <span className={`text-xs sm:text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{benefit.percentage}%</span>
              </div>
              <div className={`w-full rounded-full h-2 sm:h-3 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <motion.div
                  className="bg-green-400 rounded-full h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${benefit.percentage}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ATSSurveyResults;