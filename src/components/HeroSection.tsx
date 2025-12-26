"use client";
import { motion } from "motion/react";
import { EncryptedText } from "./ui/encrypted-text";
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
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <BackgroundRippleEffect />
      <h1 className="z-10 font-black">
        <TypewriterEffectSmooth words={words} />
      </h1>
      <h1 className="z-10 mt-2 text-4xl md:text-7xl lg:text-8xl font-black">
        <EncryptedText
          text="Software Developer"
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          revealDelayMs={175}
        />
      </h1>
      <p className="z-10 mt-2 md:mt-5 w-[80%] md:w-1/2 text-xs md:text-lg text-justify [text-align-last:center] md:text-center text-white/50">
        Enthusiastic Web Developer with a passion for creating scalable,
        high-performance, and user-centric applications using React and Node.js
      </p>
      <motion.div className="z-10 relative mx-4 my-4 flex items-center justify-center gap-4 text-center">
        <LayoutTextFlip
          text="Creative"
          words={["Coding", "Thinking", "Components!"]}
        />
      </motion.div>
      <button
        onClick={onButtonClick}
        className="z-10 mt-10 md:mt-20 bg-transparent text-sm sm:text-lg font-black px-4 md:px-6 py-2 md:py-3 rounded-3xl border-2 border-[#155dfc] hover:bg-neutral-900 cursor-pointer hover:shadow-[0_0_10px_#155dfc,0_0_20px_#155dfc,0_0_30px_#155dfc] transition-shadow duration-300"
      >
        Let's Connect
      </button>
    </div>
  );
};
