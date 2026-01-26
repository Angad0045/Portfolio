"use client";
import { motion, spring } from "motion/react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { LayoutTextFlip } from "./ui/layout-text-flip";

interface ChildProps {
  onButtonClick: () => void;
}

const words = [
  {
    text: "Hi,",
  },
  {
    text: "I'm",
  },
  {
    text: "Angad",
    className: "dark:text-[#155fdc]",
  },
  {
    text: "Patil",
    className: "dark:text-[#155dfc]",
  },
];

export const HeroSection = ({ onButtonClick }: ChildProps) => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      <BackgroundRippleEffect />
      <h1 className="z-10 font-black">
        <TypewriterEffectSmooth words={words} />
      </h1>
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.8,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="z-10 mt-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-[44px] md:text-7xl lg:text-8xl font-black tracking-tight"
      >
        Software Developer
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
          scale: 0.8,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 1.75,
        }}
        className="z-10 mt-1 md:mt-5 w-[80%] md:w-1/2 text-xs md:text-lg text-justify [text-align-last:center] md:text-center text-white/50 tracking-tight"
      >
        Enthusiastic Web Developer with a passion for creating scalable,
        high-performance, and user-centric applications using React and Node.js
      </motion.p>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 2,
        }}
        className="z-10 relative mx-4 my-4 flex items-center justify-center gap-4 text-center"
      >
        <LayoutTextFlip
          text="Creative"
          words={["Coding", "Thinking", "Components!"]}
        />
      </motion.div>
      <motion.button
        initial={{
          opacity: 0,
          scale: 0.8,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        whileHover={{ scale: 1.07, y: -5 }}
        whileTap={{ scale: 0.7, y: 5 }}
        transition={{ type: spring, stiffness: 300, damping: 15 }}
        onClick={onButtonClick}
        className="absolute z-50 bottom-30 bg-transparent text-sm sm:text-lg font-black px-4 md:px-6 py-2 md:py-3 rounded-3xl border-2 border-[#155dfc] hover:bg-neutral-900 cursor-pointer"
      >
        Let's Connect
      </motion.button>
    </div>
  );
};
