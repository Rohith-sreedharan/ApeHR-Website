import {
  Plus,
  SquareCode,
  SquareDashedMousePointer,
  Tangent,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { forwardRef, useEffect } from "react";
import { AnimatedBeamDemo } from "./AnimatedBeam";
import BorderBeamDemo from "./Borderbeam";

const SecondSlide = forwardRef<HTMLDivElement>((props, ref) => {
  const controls = useAnimation();
  const [ref1, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <div
      ref={ref}
      id="second-slide"
      className="min-h-screen flex flex-col lg:flex-row relative bg-white dark:bg-black text-black dark:text-white p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden"
    >
      <div className="right-dotted-line hidden sm:block absolute top-0 h-full left-4 sm:left-8 w-0 border-dashed border-l-2 border-gray-300 dark:border-gray-800"></div>
      <div className="top-dotted-line absolute hidden sm:block top-4 sm:top-8 w-full left-0 h-0 border-dashed border-b-2 border-gray-300 dark:border-gray-800"></div>

      {/* Circles and rotating lines */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="inner-circle w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border-dashed border-2 border-gray-300 dark:border-gray-800"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="outer-circle w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-dashed border-2 border-gray-300 dark:border-gray-800"></div>
          </div>
          <motion.div
            className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45"
            initial={{ rotate: -45, translateX: "50%", translateY: "-50%" }}
            animate={{
              rotate: [-45, 135],
              translateX: ["50%", "50%"],
              translateY: ["-50%", "-50%"],
            }}
            transition={{ repeat: Infinity, duration: 100 }}
          >
            <div className="left-diagonal w-96 border-dashed border-b-2 border-gray-300 dark:border-gray-800"></div>
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 -rotate-45"
            initial={{ rotate: 45, translateX: "50%", translateY: "-50%" }}
            animate={{
              rotate: [45, 225],
              translateX: ["50%", "50%"],
              translateY: ["-50%", "-50%"],
            }}
            transition={{ repeat: Infinity, duration: 100 }}
          >
            <div className="left-diagonal w-96 border-dashed border-b-2 border-gray-300 dark:border-gray-800"></div>
          </motion.div>
        </div>
      </div>

      <Plus
        className="absolute top-2 right-2 sm:left-4 sm:top-4 text-gray-400 dark:text-gray-600"
        size="1.5rem"
      />
      <Plus
        className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-gray-400 dark:text-gray-600"
        size="1.5rem"
      />

      <div className="ml-0 md:ml-12 flex-1 z-10 mb-8 lg:mb-0">
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-bold mb-4">
          VISUALIZING SUCCESS
        </p>
        {/* <p className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-bold mb-4"> */}
        {/*   OUR PRODUCT */}
        {/* </p> */}
        <motion.h1
          initial={{ x: "-10%", opacity: 0 }}
          animate={controls}
          ref={ref1}
          className="bg-gradient-to-r from-black dark:from-white to-transparent bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-max"
          style={{
            fontSize: "clamp(1.875rem, 5vw, 3.75rem)",
          }}
        >
          Who we are?
        </motion.h1>
        <motion.h1 className="mb-6 text-2xl lg:mb-10 font-bold pt-2">
          One Stop Solution's
        </motion.h1>
        <motion.div
          ref={ref2}
          variants={containerVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          className="flex flex-col gap-6 md:gap-8 mb-0 sm:mb-10"
        >
          {[
            "Job Application",
            "Applicant Tracking",
            "Carrer Site & Job Post",
          ].map((title, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card flex gap-4 dark:border-2 md:gap-8 bg-gray-200 dark:bg-gray-800/25 p-4 md:p-6 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/5"
            >
              <div className="flex items-center mb-4">
                {index === 0 && <Tangent size="1.5rem" />}
                {index === 1 && <SquareDashedMousePointer size="1.5rem" />}
                {index === 2 && <SquareCode size="1.5rem" />}
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
                <p className="dark:font-thin text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  {index === 0 &&
                    "One clear overview for collaborative hiring "}
                  {index === 1 && "Forms for great candidate experience"}
                  {index === 2 && "The best looking career site out there "}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex-1 relative h-64 sm:h-80 md:h-96 lg:h-auto mt-20 md:mt-32">
        <BorderBeamDemo />
      </div>
    </div>
  );
});

export default SecondSlide;
