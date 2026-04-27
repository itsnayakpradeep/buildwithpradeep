"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ServiceCard({ item }: any) {
  const Icon = item.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 120, damping: 20 });

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  return (
    <motion.div
      className="
        group relative
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl p-6
        transition-all duration-300
        hover:border-primary
        hover:-translate-y-2
      "
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        x.set((px - 0.5) * 10);
        y.set((0.5 - py) * 10);

        glowX.set(px * 100);
        glowY.set(py * 100);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        glowX.set(50);
        glowY.set(50);
      }}
    >

      {/* 🔥 CURSOR GLOW */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
        style={{
          background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(59,130,246,0.25), transparent 60%)`,
        }}
      />

      {/* ICON */}
      <div className="relative mb-5">

  {/* 🔥 COLORED GLOW BACKGROUND */}
  <div
    className="absolute inset-0 blur-xl opacity-30 rounded-xl"
    style={{
      background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)`,
    }}
  />

    {/* ICON BOX */}
    <div className="
        relative w-12 h-12 flex items-center justify-center
        rounded-xl bg-white/5 border border-white/10
        transition group-hover:scale-110
    ">
        <Icon
        className={`${item.iconColor} w-5 h-5`}
        style={{
            filter: `drop-shadow(0 0 8px ${item.glow})`,
        }}
        />
    </div>

    </div>

      {/* TEXT */}
      <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition">
        {item.title}
      </h3>

      <p className="text-sm text-text-secondary group-hover:text-white/80 transition">
        {item.desc}
      </p>

    </motion.div>
  );
}