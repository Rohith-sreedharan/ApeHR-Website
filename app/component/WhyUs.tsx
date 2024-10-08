import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Head from "next/head";

interface PercentageDisplayProps {
  percentage: number;
  children: React.ReactNode;
}

const WhyUs: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    query: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  };
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
    let fillPercentage;
    if (percentage == 85) {
      fillPercentage = 70;
    } else if (percentage == 59) {
      fillPercentage = 55;
    } else {
      fillPercentage = 65;
    }

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
              <PercentageDisplay percentage={85}>
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
              <PercentageDisplay percentage={59}>
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
              <PercentageDisplay percentage={76}>
                Sees room for recruitment process
                <br />
                improvement.
              </PercentageDisplay>
            </motion.div>
          </div>
        </div>
      </div>
      <p className="font-semibold pt-16 pb-4 mx-0 sm:mx-16 flex">
        To
        <a className="text-purple-600 cursor-pointer  mx-1">learn more</a>, we
        conducted a survey with a broader focus group. Below are some of the key
        questions and results.
      </p>
      <div>
        <div className="flex font-semibold  pb-4 mx-0 sm:mx-16">
          <p className="text-[15px]">
            *To learn more about this{" "}
            <button
              onClick={() => setShowModal(true)}
              className="text-purple-500 underline"
            >
              click here
            </button>{" "}
            and learn more about suvey contact us compliance@springreen.in
          </p>
        </div>
        <Head>
          <script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
          ></script>
        </Head>
        <Transition.Root show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setShowModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-auto rounded-lg bg-white px-4 pb-4 pt-5 text-center shadow-xl transition-all sm:my-8 sm:w-full h-[500px] sm:max-w-xl sm:p-6 dark:bg-black">
                    <div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                        >
                          Fill Up The Form
                        </Dialog.Title>
                        <form onSubmit={handleSubmit}>
                          <div className="mt-4">
                            <p className="font-semibold text-start pb-2">
                              Name
                            </p>
                            <input
                              type="text"
                              name="name"
                              className="block w-full rounded-md pl-2 border-0 pb-2 py-1.5 text-gray-900 dark:bg-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 dark:text-white"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Eg-Rohit"
                            />
                          </div>
                          <div className="mt-4">
                            <p className="font-semibold text-start pb-2">
                              Email
                            </p>
                            <input
                              type="email"
                              name="email"
                              className="block w-full rounded-md pl-2 dark:bg-black border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 dark:text-white"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Eg-user@gmail.com"
                            />
                          </div>
                          <div className="mt-4">
                            <p className="font-semibold text-start pb-2">
                              Subject
                            </p>
                            <input
                              type="text"
                              name="subject"
                              className="block w-full rounded-md pl-2 dark:bg-black border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 dark:text-white"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Whats your query about"
                            />
                          </div>
                          <div className="mt-4">
                            <p className="font-semibold text-start pb-2">
                              Query
                            </p>
                            <input
                              type="text"
                              name="query"
                              className="block pl-2 text-start align-text-top dark:bg-black w-full rounded-md py-3 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 dark:text-white"
                              value={formData.query}
                              onChange={handleChange}
                              placeholder="Your Query"
                            />
                          </div>
                          <div
                            className="g-recaptcha mt-4"
                            data-sitekey="YOUR_SITE_KEY"
                          ></div>
                          <div className="mt-5 sm:mt-6 flex justify-between gap-3 ">
                            <button
                              type="submit"
                              className=" w-1/2 rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              className="mt-3 w-1/2  rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

export default WhyUs;
