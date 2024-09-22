import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  isMiddleCard = false, // Prop to check if it's the middle card
  isSideCard = false, // Prop to check if it's a side card (first or third)
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  isMiddleCard?: boolean; // New prop to differentiate the middle card
  isSideCard?: boolean; // New prop to differentiate side cards
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
    },
  };

  const commonStyles = "rounded-[2rem]"; // Common radius for all cards
  const gradientBackground =
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]";

  return (
    <div className={cn("relative p-[6px] group", containerClassName)}>
      {/* First background layer for glowing effect */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] opacity-0",
          isSideCard
            ? "group-hover:opacity-60 group-focus-within:opacity-60 blur-xl transition-opacity duration-300" // Apply glow effect on hover and focus
            : "opacity-0", // No glow for the middle card
          gradientBackground,
          commonStyles
        )}
      />

      {/* Second background layer for middle cards */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1]",
          isSideCard
            ? "opacity-100" // Side card fully visible (previously middle card effect)
            : "opacity-60 blur-xl", // Middle card is invisible
          gradientBackground,
          commonStyles
        )}
      />

      {/* Glowing border for middle card on hover */}
      {isMiddleCard && (
        <div
          className={cn(
            "absolute inset-0 border-8 border-transparent z-[2] group-hover:border-opacity-60 transition duration-300 border-[#00ccb1]",
            commonStyles
          )}
        >
          {/* Optional: add a glow effect on hover */}
          <div className="absolute inset-0 rounded-[2rem] bg-[#00ccb1] opacity-0 group-hover:opacity-60 transition duration-300 blur-xl" />
        </div>
      )}

      {/* Content */}
      <div className={cn("relative z-10 rounded-[1.9rem]", className)}>
        {children}
      </div>
    </div>
  );
};
