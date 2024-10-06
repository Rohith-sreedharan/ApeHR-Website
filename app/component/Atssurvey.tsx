import React from "react";
import Link from "next/link";
import { AnimatedBeamDemo } from "./AnimatedBeam";
import AnimatedBeamMultipleOutputDemo from "./AnimatedMultiple";
import { BorderBeam } from "@/components/ui/border-beam";

interface ATSSurveyResultsProps {
  isDarkMode: boolean;
}

const ATSSurveyResults: React.FC<ATSSurveyResultsProps> = ({ isDarkMode }) => {
  const benefits = [
    { name: "Ease and convenience of use", percentage: 63 },
    {
      name: "Scheduling and tracking of candidate throughout the process",
      percentage: 54,
    },
    { name: "Searching for candidates, resumes", percentage: 47 },
    { name: "Career sites and other sourcing", percentage: 32 },
    { name: "Data pull", percentage: 29 },
  ];

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-2 sm:p-2 lg:p-4 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="relative dark:bg-black flex flex-col mx-16 items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <AnimatedBeamMultipleOutputDemo />

        <BorderBeam size={250} duration={12} delay={9} className="" />
      </div>

      <div className="space-y-6 mr-0 sm:mr-28">
        <h2
          className={`text-lg sm:text-xl lg:text-2xl font-semibold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          What's the most important benefit of the ATS from your perspective?
          (Multiple selection)
        </h2>
        <div className="space-y-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span
                  className={`text-xs sm:text-sm flex-1 pr-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {benefit.name}
                </span>
                <span
                  className={`text-xs sm:text-sm font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {benefit.percentage}%
                </span>
              </div>
              <div
                className={`w-full rounded-full h-2 sm:h-3 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <div
                  className="bg-purple-600 rounded-full h-full"
                  style={{ width: `${benefit.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="pl-16 pt-2 font-bold">
        To learn more, contact us by
        <Link href="/" className="text-purple-600  mx-1">
          +91 760497896
        </Link>
        <Link href="/" className="text-purple-600  mx-1">
          | hello@springreen.in
        </Link>
      </p>
    </div>
  );
};

export default ATSSurveyResults;
