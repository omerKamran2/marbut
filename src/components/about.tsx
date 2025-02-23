'use client'
import { motion } from "framer-motion";

export default function HeroSection() {
  // Define some framer-motion variants for a simple fade/scale-in
  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      <motion.h1
        className="text-[56px] md:text-[72px] font-medium pb-[72px] text-[#1E1E1E] leading-tight"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        We Hire <br className="" /> Perfect Fits
      </motion.h1>

      <motion.p
        className="text-gray-600 max-w-4xl text-[20px] md:text-[24px] font-medium pb-[72px] text-[#757575]"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        We source the top 1% professionals who are seasoned experts from top global firms and distinguished alumni of Pakistan’s premier universities.
      </motion.p>

      <motion.button
        className="flex justify-center items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition w-[240px] h-[40px] text-[16px] font-medium"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Start Hiring
      </motion.button>
    </div>
  );
}
