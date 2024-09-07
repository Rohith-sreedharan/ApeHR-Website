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
    <div className="min-h-screen flex flex-col lg:flex-row relative bg-white dark:bg-black text-black dark:text-white p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
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
        <motion.h1
          initial={{ x: "-10%", opacity: 0 }}
          animate={controls}
          ref={ref}
          className="bg-gradient-to-r from-black dark:from-white to-transparent bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-10 w-max"
          style={{
            fontSize: "clamp(1.875rem, 5vw, 3.75rem)",
          }}
        >
          Who we are?
        </motion.h1>

        <motion.div
          ref={ref2}
          variants={containerVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          className="flex flex-col gap-6 md:gap-8 mb-0 sm:mb-10"
        >
          {["Branding", "UI & UX design", "Development"].map((title, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card flex gap-4 md:gap-8 bg-gray-200 dark:bg-gray-800/25 p-4 md:p-6 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/5"
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
                    "Consistent design makes it easy to brand your own."}
                  {index === 1 &&
                    "The kit is built on the principles of the atomic design system."}
                  {index === 2 &&
                    "Easy to customize and extend, saving you time and money."}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex-1 relative h-64 sm:h-80 md:h-96 lg:h-auto mt-8 lg:mt-0">
        <motion.img
          className="absolute z-10 border-2 mx-1 shadow-lg border-gray-300 dark:border-gray-800 rounded-lg right-0 lg:-right-12 top-0 lg:top-20 w-3/4 sm:w-2/3 md:w-1/2 lg:w-full max-w-xl"
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
          srcSet="/chart-small.jpg 300w, /chart-medium.jpg 600w, /chart.jpg 1200w"
          sizes="(max-width: 640px) 75vw, (max-width: 768px) 66vw, (max-width: 1024px) 50vw, 100vw"
        />
      </div>
    </div>
  );
};

export default SecondSlide;
