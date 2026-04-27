"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { Search, PenTool, Gauge, Rocket } from "lucide-react";
import { useRef } from "react";
import StepCard from "./StepCard"

const steps = [
  {
    icon: Search,
    color: "from-blue-500 to-cyan-400",
    title: "Strategy",
    desc: "We understand your business & goals.",
  },
  {
    icon: PenTool,
    color: "from-green-500 to-emerald-400",
    title: "Design & Build",
    desc: "We design and build a high-converting website.",
  },
  {
    icon: Gauge,
    color: "from-purple-500 to-pink-400",
    title: "Test & Optimize",
    desc: "We test everything for speed & performance.",
  },
  {
    icon: Rocket,
    color: "from-yellow-400 to-orange-400",
    title: "Launch & Grow",
    desc: "We launch your website and help you grow.",
  },
];

export default function Process() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="process"
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10"
    >

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.15),transparent_40%)]" />

      <div className="grid md:grid-cols-[1fr_2fr] gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-blue-500 mb-3 uppercase tracking-wider">
            Our Process
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Simple. Clear. <br/>Effective.
          </h2>
        </motion.div>

        {/* RIGHT */}
        <div className="relative">

          {/* BASE LINE */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10" />

          {/* 🔥 PROGRESS LINE */}
          <motion.div
            className="hidden md:block absolute top-6 left-0 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            style={{ width: progress }}
          />

          {/* STEPS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}