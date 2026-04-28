"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useAnimationFrame, motion } from "framer-motion";

export default function Orbit3D() {
    const [angle, setAngle] = useState(0);
    const mounted = useRef(false);

    useEffect(() => {
    mounted.current = true;
    }, []);

    useAnimationFrame((t, delta) => {
    if (!mounted.current) return;
    setAngle((prev) => prev + delta * 0.015);
    });

  const techStack = [
    { src: "/tech/React.svg", angle: 0 },
    { src: "/tech/Next.js.svg", angle: 72, invert: true },
    { src: "/tech/JavaScript.svg", angle: 144 },
    { src: "/tech/TypeScript.svg", angle: 216 },
    { src: "/tech/Tailwind CSS.svg", angle: 288 },
  ];

  return (
    <div className="relative flex justify-center items-center h-[400px]">

      {/* 🔵 Glow */}
      <div className="absolute w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full" />

      {/* 🌐 REAL 3D ORBIT */}
      {techStack.map((icon, i) => {
        const baseAngle = (icon.angle * Math.PI) / 180;
        const current = baseAngle + (mounted ? angle * 0.01 : 0);

        const radius = 150;

        const x = Math.cos(current) * radius;
        const y = Math.sin(current) * radius * 0.4;

        const depth = (Math.sin(current) + 1) / 2;

        const scale = 0.6 + depth * 0.6;
        const opacity = 0.4 + depth * 0.6;

        return (
          <div
            key={i}
            className="absolute"
            style={{
              transform: `translate(${x}px, ${y}px) scale(${scale})`,
              opacity,
              zIndex: Math.floor(depth * 100),
            }}
          >
            <motion.img
              src={icon.src}
              className={`
                w-8 h-8
                ${icon.invert ? "invert" : ""}
                drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]
              `}
              whileHover={{ scale: 1.3 }}
            />
          </div>
        );
      })}

      {/* 💎 PROFILE */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative z-50"
      >
        <Image
          src="/profile.png"
          alt="Pradeep"
          width={280}
          height={280}
          className="rounded-2xl border border-white/10 shadow-xl"
        />
      </motion.div>

    </div>
  );
}