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
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [controls, inView]);
  return (
    <div className="dark:bg-black pb-32">
      <div className="flex justify-center text-center">
        <motion.h2
          initial={{ x: "-10%", opacity: 0 }}
          animate={controls}
          ref={ref}
          className="bg-gradient-to-r from-black dark:from-white to-transparent bg-clip-text  text-5xl font-bold mb-10 w-max"
        >
          Make time for what matters,
          <br />
          let AI handle the hardwork
        </motion.h2>
      </div>
      <div className="flex justify-center space-x-48 text-center">
        {/* First Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          ref={ref}
          className="flex flex-col text-start max-w-[250px] space-y-2"
        >
          <h3 className="text-6xl font-bold text-green-500">75%</h3>
          <p className="text-xl font-semibold w-full pt-4">
            Operations shift from
            <br />
            production to strategy
          </p>
          <span className="text-sm pt-2 w-full text-gray-400">
            Source: Gartner
          </span>
        </motion.div>
        {/* Second Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          ref={ref}
          className="flex flex-col text-start space-y-2 max-w-[250px]"
        >
          <h3 className="text-6xl font-bold text-green-500">59%</h3>
          <p className="text-xl font-semibold pt-4">
            Productivity
            <br />
            improvement
          </p>
          <span className="text-sm pt-2 text-gray-400">
            Source: NNGroup, MIT
          </span>
        </motion.div>
        {/* Third Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          ref={ref}
          className="flex flex-col text-start space-y-2 max-w-[250px]"
        >
          <h3 className="text-6xl font-bold text-green-500">40%</h3>
          <p className="text-xl font-semibold pt-4">
            Higher-quality task
            <br />
            output
          </p>
          <span className="text-sm pt-2 text-gray-400">Source: Harvard</span>
        </motion.div>
      </div>
    </div>
  );
}
