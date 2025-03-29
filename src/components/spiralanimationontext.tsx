"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const SpiralAnimationOnText = () => {
  const [x, setX] = useState(0);
  const wavelength = 28;

  useEffect(() => {
    const interval = setInterval(() => {
      setX((prevX) => (prevX > wavelength ? 0 : prevX + 0.1));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="font-bold text-6xl">HEADING</h1>
      <motion.div
        className="w-4 h-4 rounded-full bg-red-200 absolute transform -translate-x-36"
        animate={{
          x: x * 10, // Spiral motion (scales horizontally)
          y: Math.sin(x) * 70, // Sine wave motion (up and down)
        }}
        transition={{
          ease: "linear",
          duration: 0.1,
        }}
      />
      <motion.div
        className="w-4 h-4 rounded-full bg-blue-200 absolute transform -translate-x-36"
        animate={{
          x: x * 10, // Spiral motion (scales horizontally)
          y: Math.sin(-x) * 70, // Sine wave motion (up and down)
          opacity: 1
        }}
        transition={{
          ease: "linear",
          duration: 0.1,
        }}
      />
    </div>
  );
};





