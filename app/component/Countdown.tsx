"use client";

import { useState, useEffect, FC, Fragment } from "react";
import { CircleArrowLeft } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";

type CountdownProps = {
  setDisplayCountdown: (value: boolean) => void;
};

const Countdown: FC<CountdownProps> = ({ setDisplayCountdown }) => {
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00:00");

  useEffect(() => {
    const getTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let targetDate = new Date(currentYear, 9, 31); // Month is 0-indexed, so 9 is October

      if (targetDate < now) {
        targetDate.setFullYear(currentYear + 1);
      }

      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const updateCountdown = () => {
      setTimeLeft(getTimeLeft());
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-[99]" onClose={() => setDisplayCountdown(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-center shadow-xl transition-all sm:my-8 sm:w-full h-auto sm:max-w-3xl sm:p-6 dark:bg-black">
                <button
                  onClick={() => setDisplayCountdown(false)}
                  className="absolute top-2 left-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                >
                  <CircleArrowLeft size={24} />
                </button>

                <div>
                  <h1 className="text-4xl mb-4 font-bold dark:text-white">Countdown to Product Launch</h1>

                  <div className="flex justify-center items-center gap-4 mb-8">
                    {timeLeft.split(":").map((unit, index) => (
                      <span
                        key={index}
                        className="inline-block w-24 h-24 text-5xl flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg"
                      >
                        {unit}
                      </span>
                    ))}
                  </div>

                  <div className="text-xl font-light tracking-wide mb-8 dark:text-white">
                    <span className="mx-4">Days</span>
                    <span className="mx-4">Hours</span>
                    <span className="mx-4">Minutes</span>
                    <span className="mx-4">Seconds</span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Countdown;
