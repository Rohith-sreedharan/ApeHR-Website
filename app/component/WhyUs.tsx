import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function WhyUs() {
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

  return (
    <div className="dark:bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ x: "-10%", opacity: 0 }}
          animate={controls}
          ref={ref}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-black dark:from-white to-transparent bg-clip-text"
        >
          Make time for what matters,
          <br className="hidden sm:inline" />
          let AI handle the hardwork
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* First Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex flex-col items-center text-center space-y-2"
          >
            <h3 className="text-5xl sm:text-6xl font-bold text-green-500">75%</h3>
            <p className="text-lg sm:text-xl font-semibold mt-4">
              Operations shift from
              <br />
              production to strategy
            </p>
            <span className="text-sm text-gray-400 mt-2">Source: Gartner</span>
          </motion.div>

          {/* Second Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex flex-col items-center text-center space-y-2"
          >
            <h3 className="text-5xl sm:text-6xl font-bold text-green-500">59%</h3>
            <p className="text-lg sm:text-xl font-semibold mt-4">
              Productivity
              <br />
              improvement
            </p>
            <span className="text-sm text-gray-400 mt-2">Source: NNGroup, MIT</span>
          </motion.div>

          {/* Third Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex flex-col items-center text-center space-y-2"
          >
            <h3 className="text-5xl sm:text-6xl font-bold text-green-500">40%</h3>
            <p className="text-lg sm:text-xl font-semibold mt-4">
              Higher-quality task
              <br />
              output
            </p>
            <span className="text-sm text-gray-400 mt-2">Source: Harvard</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}