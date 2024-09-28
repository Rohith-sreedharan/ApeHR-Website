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
      <div className="flex flex-col items-center mt-12 space-y-2">
        <svg viewBox="0 0 120 120" className="w-64 h-48">
          <defs>
            <linearGradient
              id={`gradient-${percentage}`}
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset={`${fillPercentage}%`} stopColor="#805ad5" />
              <stop offset={`${fillPercentage}%`} stopColor="#E5E7EB" />
              <stop offset="100%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-4xl sm:text-7xl"
            fontWeight="bold"
            fill={`url(#gradient-${percentage})`}
          >
            {percentage}%
          </text>
        </svg>
        <p className="text-lg font-semibold text-center mt-4">{children}</p>
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
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-start bg-gradient-to-r from-black dark:from-white to-transparent bg-clip-text"
        >
          <div className="py-2">
            <p className="text-purple-600 text-lg">KEY METRICS</p>
            What did we discover initially?
          </div>
        </motion.h2>

        <p className="text font-semibold">
          In order to understand the main issues and needs of the users, we
          conducted user interview sessions among
          <br />
          carefully selected recruitment company employees.
        </p>

        <div className="flex flex-col items-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 w-full text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex justify-center"
    >
      <PercentageDisplay percentage={81}>
        Find it hard to manage
        <br />
        incoming resumes.
      </PercentageDisplay>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex justify-center"
    >
      <PercentageDisplay percentage={53}>
        Would love to collaborate more with
        <br />
        other recruiters in the recruitment process.
      </PercentageDisplay>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex justify-center"
    >
      <PercentageDisplay percentage={71}>
        Sees room for recruitment process
        <br />
        improvement.
      </PercentageDisplay>
    </motion.div>
  </div>
</div>

      </div>
      <p className="font-semibold pt-16 pb-4 flex mx-0 sm:mx-16">
          To learn more we carried out the survey among an even broader focus
          group. Below we present some of the questions with the results.
        </p>
    </div>
  );
};

export default WhyUs;
