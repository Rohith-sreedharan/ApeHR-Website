import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


interface PercentageDisplayProps {
  percentage: number;
  children: React.ReactNode;
}

const WhyUs: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  const PercentageDisplay: React.FC<PercentageDisplayProps> = ({
    percentage,
    children,
  }) => {
    const fillPercentage = Math.min(percentage, 60);
  
    return (
      <div className="flex flex-col items-center text-center mt-32 space-y-2">
        <svg viewBox="0 0 120 120" className="w-80 h-48">
          <defs>
            <linearGradient id={`gradient-${percentage}`} x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset={`${fillPercentage}%`} stopColor="#10B981" />
              <stop offset={`${fillPercentage}%`} stopColor="#E5E7EB" />
              <stop offset="100%" stopColor="#E5E7EB" />
            </linearGradient>
            <pattern id={`wave-pattern-${percentage}`} x="0" y="0" width="120" height="10" patternUnits="userSpaceOnUse">
              <path d="M0 5 Q30 0, 60 5 T120 5" fill="none" stroke="#10B981" strokeWidth="2">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="-120 0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
            </pattern>
          </defs>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-7xl"
            fontWeight="bold"
            fill={`url(#gradient-${percentage})`}
          >
            {percentage}%
          </text>
          <g clipPath={`inset(${100 - fillPercentage}% 0 0 0)`}>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="text-7xl"
              fontWeight="bold"
              fill={`url(#wave-pattern-${percentage})`}
            >
              {percentage}%
            </text>
          </g>
        </svg>
        <p className="text-lg font-semibold mt-4">{children}</p>
      </div>
    );
  };
  return (
    <div className="dark:bg-black py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ x: "-10%", opacity: 0 }}
          animate={controls}
          ref={ref}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-start bg-gradient-to-r from-black dark:from-white to-transparent bg-clip-text"
        >
          <div className="py-2">
            <p className="text-green-500 text-lg">KEY METRICS</p>
            What did we discover initially?
          </div>
        </motion.h2>

        <p className="text font-semibold">
          In order to understand the main issues and needs of the users, we
          conducted user interview sessions among
          <br />
          carefully selected recruitment company employees.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={controls}>
            <PercentageDisplay percentage={81}>
            Struggling to manage incoming resumes and track applicants?
            </PercentageDisplay>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={controls}>
            <PercentageDisplay percentage={53}>
              would love to collaborate more with
              <br />
              other recruiters in the recruitment process.
            </PercentageDisplay>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={controls}>
            <PercentageDisplay percentage={71}>
              sees room for recruitment process
              <br />
              improvement.
            </PercentageDisplay>
          </motion.div>
        </div>
        <p className="font-semibold pt-28 text-start">
          To learn more we carried out the survey among an even broader focus
          group. Below we present some of the questions with the results.
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
