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
          In order to understand the main issues and needs of the users,we
          conducted user interview sessions among
          <br />
          carefully selected recruitment company employees.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* First Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex flex-col items-center text-center mt-32 space-y-2"
          >
            <h3 className="text-5xl sm:text-9xl font-bold text-green-500">
              81%
            </h3>
            <p className="text-lg font-semibold mt-4">
              find it hard to manage incoming resumes.
            </p>
          </motion.div>

          {/* Second Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex flex-col items-center text-start  mt-32 space-y-2"
          >
            <h3 className="text-5xl sm:text-9xl font-bold text-green-500">
              53%
            </h3>
            <p className="text-lg font-semibold mt-4">
              would love to colaborate more with
              <br />
              other recruiters in the recruitment process.
            </p>
          </motion.div>

          {/* Third Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex flex-col items-center text-start  mt-32 space-y-2"
          >
            <h3 className="text-5xl sm:text-9xl font-bold text-green-500">
              71%
            </h3>
            <p className="text-lg font-semibold mt-4">
              sees room for recruitment process
              <br />
              improvement.
            </p>
          </motion.div>
        </div>
        <p className="font-semibold pt-28 text-start">
          To learn more we carried out the survey among an even broader focus
          group.Below we present some of the questions with the results.
        </p>
      </div>
    </div>
  );
}
