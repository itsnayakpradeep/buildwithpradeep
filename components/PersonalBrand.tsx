"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Orbit3D = dynamic(() => import("./Orbit3D"), {
  ssr: false,
});
export default function PersonalBrand() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-20">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm mb-4">
            Personal Brand
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            I Build Websites That{" "}
            <span className="text-gradient">Bring Clients.</span>
          </h1>

          <p className="text-text-secondary mt-4 max-w-lg">
            Hi, I’m Pradeep. I design and develop high-converting websites for coaches,
            businesses, and startups — focused on results, not just design.
          </p>

          {/* STATS */}
          <div className="flex gap-6 mt-6 text-sm text-white/70 flex-wrap">
            <span>🚀 120+ Projects</span>
            <span>⚡ 2–3 Day Delivery</span>
            <span>📈 300% Lead Growth</span>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block bg-primaryGradient px-6 py-3 rounded-xl font-medium btn-glow"
            >
              Work With Me →
            </a>
          </div>

          {/* 🔥 TECH STACK */}
          <div className="mt-10">

          <p className="text-sm text-white/40 mb-4">
            Built with modern technologies
          </p>

          <div className="flex items-center gap-6 flex-wrap">

            {[
              { name: "React.js", icon: "/tech/React.svg" },
              { name: "Next.js", icon: "/tech/Next.js.svg",invert: true },
              { name: "JavaScript", icon: "/tech/JavaScript.svg" },
              { name: "TypeScript", icon: "/tech/TypeScript.svg" },
              { name: "Tawilwind CSS", icon: "/tech/Tailwind CSS.svg" },
              {name: "Redux", icon: "/tech/Redux.svg"},
              {name : "Bootstrap" , icon: "/tech/Bootstrap.svg"},
              { name: "Node.js", icon: "/tech/Node.js.svg"},
              { name: "MongoDB", icon: "/tech/MongoDB.svg" },
              {name: "MySQL", icon: "/tech/MySQL.svg"}
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1 }}
                className="
                  flex items-center gap-2 px-3 py-2 rounded-lg
                  bg-white/5 border border-white/10
                  backdrop-blur
                  hover:border-blue-500/40
                  transition group
                "
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className={`
                    w-5 h-5 opacity-80 group-hover:opacity-100
                    ${tech.invert ? "invert" : ""}
                    drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]
                  `}
                />
                <span className="text-xs text-white/70">
                  {tech.name}
                </span>
              </motion.div>
            ))}

          </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center h-[380px]"
        >
        <Orbit3D />
        </motion.div>

      </div>

    </section>
  );
}