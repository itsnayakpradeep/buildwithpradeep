import {
  motion,
  useMotionValue,
  useSpring,

} from "framer-motion";

export default function StepCard({ step, index }) {
  const Icon = step.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 120, damping: 15 });
  const rotateY = useSpring(x, { stiffness: 120, damping: 15 });

  return (
    <motion.div
      className="
        relative group
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl p-5
        transition
        hover:border-white/20
      "
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) / 20);
        y.set(-(e.clientY - centerY) / 20);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {/* 🔥 GLOW */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100
        blur-2xl transition duration-500
        bg-gradient-to-r ${step.color}
      `} />

      {/* ICON */}
      <div className={`
        relative z-10 w-12 h-12
        flex items-center justify-center
        rounded-full
        bg-gradient-to-r ${step.color}
        shadow-lg
      `}>
        <Icon className="text-white" size={18} />
      </div>

      {/* NUMBER */}
      <span className="absolute -bottom-1 -right-1
          w-5 h-5 rounded-full
          bg-[#0B1220]
          border border-white/20
          text-[10px]
          flex items-center justify-center
          text-white/70">
        {index + 1}
      </span>

      {/* TEXT */}
      <h3 className="mt-4 font-semibold text-lg relative z-10">
        {step.title}
      </h3>

      <p className="text-sm text-text-secondary relative z-10">
        {step.desc}
      </p>
    </motion.div>
  );
}