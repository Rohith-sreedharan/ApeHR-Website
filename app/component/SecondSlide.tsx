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
    <div className="h-screen flex relative bg-white dark:bg-black text-black dark:text-white p-24">
      <div className="right-dotted-line absolute top-0 h-screen left-8 w-0 border-dashed border-l-2 border-gray-300 dark:border-gray-800"></div>
      <div className="top-dotted-line absolute top-8 w-full left-0 h-0 border-dashed border-b-2 border-gray-300 dark:border-gray-800"></div>
      <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
        <div className="inner-circle w-48 h-48 rounded-full border-dashed border-2 border-gray-300 dark:border-gray-800"></div>
      </div>
      <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
        <div className="outer-circle w-80 h-80 rounded-full border-dashed border-2 border-gray-300 dark:border-gray-800"></div>
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
      <Plus className="absolute top-4 left-4 text-gray-400 dark:text-gray-600" size={40} />
      <Plus className="absolute bottom-4 left-4 text-gray-400 dark:text-gray-600" size={40} />
      <div className="flex-1 z-50">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-bold mb-6">
          VISUALIZING SUCCESS
        </p>
        <motion.h1
          initial={{ x: "-10%", opacity: 0 }}
          animate={controls}
          ref={ref}
          className="bg-gradient-to-r from-black dark:from-white to-transparent bg-clip-text text-transparent text-6xl font-bold mb-10 w-max"
        >
          Who we are?
        </motion.h1>

        <motion.div
          ref={ref2}
          variants={containerVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          className="flex flex-col gap-8 mb-10"
        >
          <motion.div variants={cardVariants} className="card flex gap-8 bg-gray-200 dark:bg-gray-800/25 p-6 rounded-lg shadow-lg w-3/5">
            <div className="flex items-center mb-4">
              <Tangent size={30} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Branding</h2>
              <p className="dark:font-thin text-gray-600 dark:text-gray-300">
                Consistent design makes it easy to brand your own.
              </p>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="card flex gap-8 bg-gray-200 dark:bg-gray-800/25 p-6 rounded-lg shadow-lg w-3/5">
            <div className="flex items-center mb-4">
              <SquareDashedMousePointer size={30} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">UI & UX design</h2>
              <p className="dark:font-thin text-gray-600 dark:text-gray-300">
                The kit is built on the principles of the atomic design system.
              </p>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="card flex gap-8 bg-gray-200 dark:bg-gray-800/25 p-6 rounded-lg shadow-lg w-3/5">
            <div className="flex items-center mb-4">
              <SquareCode size={30} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Development</h2>
              <p className="dark:font-thin text-gray-600 dark:text-gray-300">
                Easy to customize and extend, saving you time and money.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex-1 p-6 rounded-lg w-full md:w-2/3">
        <motion.img
          className="absolute z-50 border-2 shadow-lg border-gray-300 dark:border-gray-800 rounded-lg -right-0 top-20"
          src="/chart.jpg"
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
