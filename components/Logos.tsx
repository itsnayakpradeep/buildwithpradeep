"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Logos() {
  const [isPaused, setIsPaused] = useState(false);

  const logos = [
    "/logos/fitcoach.svg",
    "/logos/brandify.svg",
    "/logos/elevate.svg",
    "/logos/growthlab.svg",
    "/logos/mindshift.svg",
    "/logos/startupx.svg",
  ];

  return (
    <section className="relative py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">

      {/* 🔥 DIVIDER */}
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-10 group"
      >

        {/* LEFT LINE */}
        <div className="relative w-full sm:flex-1 h-px overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-60 group-hover:opacity-100
            transition duration-300"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            text-xs md:text-sm tracking-wide
            text-white/70
            text-left sm:text-center
            w-full sm:w-auto
            px-1 sm:px-3
            relative
          "
        >
          Trusted by Coaches, Founders & Businesses

          {/* ✨ TEXT GLOW */}
          <span className="absolute inset-0 blur-md opacity-20 bg-primaryGradient bg-clip-text text-transparent">
            Trusted by Coaches, Founders & Businesses
          </span>
        </motion.p>

        {/* RIGHT LINE */}
        <div className="relative w-full sm:flex-1 h-px overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

      </motion.div>

      {/* 🌫️ FADE EDGES */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-bg via-bg/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-bg via-bg/80 to-transparent z-10" />

      {/* 🚀 MARQUEE */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-10 sm:gap-12 md:gap-16 whitespace-nowrap will-change-transform"
          animate={isPaused ? { x: 0 } : { x: "-50%" }}
          transition={{
            duration: 30, // smoother + premium
            repeat: isPaused ? 0 : Infinity,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                min-w-[100px] sm:min-w-[120px] md:min-w-[160px]
                transition duration-300
                hover:-translate-y-1
              "
            >
              <Image
                src={logo}
                alt="logo"
                width={120}
                height={40}
                className="
                  h-5 sm:h-6 md:h-8 w-auto
                  object-contain
                  opacity-70
                  grayscale
                  transition-all duration-300 ease-out
                  hover:opacity-100
                  hover:grayscale-0
                  hover:scale-110
                  hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}