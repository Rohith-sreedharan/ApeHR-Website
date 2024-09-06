import {
  Plus,
  SquareCode,
  SquareDashedMousePointer,
  Tangent,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SecondSlide = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
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
    <div className="min-h-screen flex flex-col lg:flex-row relative bg-white dark:bg-black text-black dark:text-white p-4 sm:p-8 md:p-16 lg:p-24 overflow-hidden">
      <div className="right-dotted-line absolute top-0 h-full left-2 sm:left-4 md:left-8 w-0 border-dashed border-l-2 border-gray-300 dark:border-gray-800"></div>
      <div className="top-dotted-line absolute top-2 sm:top-4 md:top-8 w-full left-0 h-0 border-dashed border-b-2 border-gray-300 dark:border-gray-800"></div>

      {/* Circles and rotating lines */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="inner-circle w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-dashed border-2 border-gray-300 dark:border-gray-800"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="outer-circle w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-dashed border-2 border-gray-300 dark:border-gray-800"></div>
          </div>
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
            initial={{ rotate: -45 }}
            animate={{ rotate: [-45, 135] }}
            transition={{ repeat: Infinity, duration: 100 }}
          >
            <div className="w-48 sm:w-64 md:w-80 lg:w-96 border-dashed border-b-2 border-gray-300 dark:border-gray-800"></div>
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"
            initial={{ rotate: 45 }}
            animate={{ rotate: [45, 225] }}
            transition={{ repeat: Infinity, duration: 100 }}
          >
            <div className="w-48 sm:w-64 md:w-80 lg:w-96 border-dashed border-b-2 border-gray-300 dark:border-gray-800"></div>
          </motion.div>
        </div>
      </div>

      <Plus
        className="absolute top-2 left-2 sm:top-4 sm:left-4 text-gray-400 dark:text-gray-600"
        size={20}
      />
      <Plus
        className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-gray-400 dark:text-gray-600"
        size={20}
      />

      <div className="flex-1 z-10 mb-8 lg:mb-0">
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-bold mb-4">
          VISUALIZING SUCCESS
        </p>
        <motion.h1
          initial={{ x: "-10%", opacity: 0 }}
          animate={controls}
          ref={ref}
          className="bg-gradient-to-r from-black dark:from-white to-transparent bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-10 w-max"
        >
          Who we are?
        </motion.h1>

        <motion.div
          ref={ref2}
          variants={containerVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          className="flex flex-col gap-4 sm:gap-6 lg:gap-8"
        >
          {[
            {
              icon: Tangent,
              title: "Branding",
              description: "Consistent design makes it easy to brand your own.",
            },
            {
              icon: SquareDashedMousePointer,
              title: "UI & UX design",
              description:
                "The kit is built on the principles of the atomic design system.",
            },
            {
              icon: SquareCode,
              title: "Development",
              description:
                "Easy to customize and extend, saving you time and money.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card flex gap-4 sm:gap-6 lg:gap-8 bg-gray-200 dark:bg-gray-800/25 p-4 sm:p-6 rounded-lg shadow-lg w-full lg:w-3/5"
            >
              <div className="flex items-center mb-2 sm:mb-4">
                <card.icon size={24} />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base dark:font-thin text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex-1 relative h-64 sm:h-80 md:h-96 lg:h-auto">
        <motion.img
          className="absolute z-10 border-2 shadow-lg border-gray-300 dark:border-gray-800 rounded-lg right-0 lg:-right-12 top-0 lg:top-20 w-3/4 sm:w-2/3 md:w-1/2 lg:w-full max-w-xl"
          src="/chart.jpg"
          alt="Chart"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default SecondSlide;
