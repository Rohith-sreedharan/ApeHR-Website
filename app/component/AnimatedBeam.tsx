"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";

// Circle component for the central logo
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center   p-3 ",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null); // Center logo reference
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="grid grid-cols-1">
        <h1 className="text-2xl pt-2 font-bold text-center text-black dark:text-white">
          ApeHr's Potential
        </h1>
      </div>
      <div
        className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg dark:bg-black bg-white p-6 md:p-10"
        ref={containerRef}
      >
        <div className="flex w-full h-full pt-4 flex-col max-w-lg items-stretch justify-between gap-10">
          {/* Row 1 */}
          <div className="flex flex-row items-center justify-between">
            <div ref={div1Ref}>
              <h1 className="text-lg md:text-xl font-semibold -mt-6 md:-mt-8">
                job listing
              </h1>
            </div>
            <div ref={div5Ref}>
              <h1 className="text-lg md:text-xl font-semibold -mt-6 md:-mt-8">
                applications
              </h1>
            </div>
          </div>

          {/* Row 2 with center circle */}
          <div className="flex flex-row items-center justify-between">
            <div ref={div2Ref}>
              <h1 className="text-lg md:text-xl font-semibold pr-12 md:pr-24">
                tracking
              </h1>
            </div>

            {/* Central logo inside the Circle */}
            <Circle
              ref={div4Ref}
              className="size-20 z-10 flex bg-white border-2 items-center justify-center rounded-full  p-1 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            >
              <Image
                src="/apehr-logo.png"
                alt="apeHr"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            </Circle>

            <div ref={div6Ref}>
              <h1 className="text-lg md:text-xl font-semibold pl-12 md:pl-32">
                onboarding
              </h1>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-row items-center justify-between">
            <div ref={div3Ref}>
              <h1 className="text-lg md:text-xl font-semibold mt-4 md:mt-10">
                dashboard
              </h1>
            </div>
            <div ref={div7Ref}>
              <h1 className="text-lg md:text-xl font-semibold mt-4 md:mt-10">
                administration
              </h1>
            </div>
          </div>
        </div>

        {/* Animated beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
        />
      </div>
    </div>
  );
}
