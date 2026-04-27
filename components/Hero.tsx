"use client";

import Image from "next/image";
import Link from "next/link";
import {  
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate, 
} from "framer-motion";

export default function Hero() {

  // 🧠 Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    mouseX.set(x);
    mouseY.set(y);
  };

  const glow = useMotionTemplate`
  radial-gradient(
    500px circle at ${smoothMouseX}% ${smoothMouseY}%,
    rgba(59,130,246,0.25),
    transparent 40%
  ),
  radial-gradient(
    400px circle at ${smoothMouseX}% ${smoothMouseY}%,
    rgba(139,92,246,0.20),
    transparent 50%
  )
`;

const spotlight = useMotionTemplate`
  radial-gradient(
    300px circle at ${smoothMouseX}% ${smoothMouseY}%,
    rgba(255,255,255,0.05),
    transparent 60%
  )
`;

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20"
    >

      {/* 🌈 DYNAMIC GLOW BACKGROUND */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(
            600px circle at ${smoothMouseX.get()}% ${smoothMouseY.get()}%,
            rgba(59,130,246,0.15),
            transparent 40%
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ x: smoothMouseX, y: smoothMouseY }}
            className="text-center md:text-left"
          >

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm mb-5">
              ⚡ Websites That Convert
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Websites That <br />
              <span className="bg-primaryGradient bg-clip-text text-transparent">
                Bring You Clients.
              </span>
            </h1>

            <p className="text-text-secondary mt-5 max-w-md mx-auto md:mx-0">
              Premium websites that look stunning, load fast, and bring clients 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-7 justify-center md:justify-start">
              <Link href="/contact" className="w-full sm:w-auto bg-primaryGradient px-6 py-3 rounded-xl btn-glow">
                Get Free Demo →
              </Link>

              <Link href="/portfolio" className="w-full sm:w-auto border border-white/20 px-6 py-3 rounded-xl hover:bg-white/5 transition">
                View Our Work
              </Link>
            </div>

            {/* Features */}
            <div className="
              flex flex-col sm:flex-row sm:flex-wrap
              gap-3 sm:gap-5
              mt-8
              text-xs sm:text-sm
              justify-center md:justify-start
            ">

              {/* ITEM */}
              <div className="
                flex items-center gap-2
                bg-white/5
                border border-white/10
                rounded-full
                px-3 py-1.5
                backdrop-blur-xl
                transition
                hover:bg-white/10
              ">
                <div className="
                  w-5 h-5 flex items-center justify-center
                  rounded-full
                  bg-primary/20
                  shadow-[0_0_8px_rgba(59,130,246,0.5)]
                ">
                  <svg
                    className="w-3 h-3 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-text-secondary">2–3 Days Delivery</span>
              </div>

              {/* ITEM */}
              <div className="
                flex items-center gap-2
                bg-white/5
                border border-white/10
                rounded-full
                px-3 py-1.5
                backdrop-blur-xl
                transition
                hover:bg-white/10
              ">
                <div className="
                  w-5 h-5 flex items-center justify-center
                  rounded-full
                  bg-green-500/20
                  shadow-[0_0_8px_rgba(34,197,94,0.5)]
                ">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-text-secondary">SEO Optimized</span>
              </div>

              {/* ITEM */}
              <div className="
                flex items-center gap-2
                bg-white/5
                border border-white/10
                rounded-full
                px-3 py-1.5
                backdrop-blur-xl
                transition
                hover:bg-white/10
              ">
                <div className="
                  w-5 h-5 flex items-center justify-center
                  rounded-full
                  bg-purple-500/20
                  shadow-[0_0_8px_rgba(168,85,247,0.5)]
                ">
                  <svg
                    className="w-3 h-3 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-text-secondary">100% Satisfaction</span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative flex justify-center"
            style={{ x: smoothMouseX.get() * -1, y: smoothMouseY.get() * -1 }}
          >

            <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
              
               {/* ✨ SPOTLIGHT (TOP LAYER LIGHT) */}
                <motion.div
                  className="pointer-events-none absolute inset-0 z-10"
                  style={{ background: spotlight }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              {/* ✅ REACTIVE GLOW */}
              <motion.div
                className="absolute inset-0 -z-10 blur-3xl opacity-50"
                style={{ background: glow }}
              />
              <Image
                src="/hero-device.png"
                alt="dashboard"
                width={1000}
                height={600}
                className="w-full h-auto"
                priority
              />

              {/* FLOATING CARD 1 */}
              <motion.div
                className="absolute top-4 right-0 sm:-right-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="
                  flex items-center gap-2
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-lg
                  px-3 py-2
                  shadow-lg
                ">

                  {/* 🔥 ICON */}
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-500/20">
                    <svg
                      className="w-4 h-4 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A10.97 10.97 0 0112 15c2.485 0 4.779.8 6.879 2.154M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  {/* 🔥 TEXT */}
                  <div className="text-xs sm:text-sm leading-tight">
                    <p className="text-white font-medium">
                      New Lead <span className="text-green-400 ml-1">+1</span>
                    </p>
                    <p className="text-[10px] sm:text-xs text-text-secondary">
                      From website
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* FLOATING CARD 2 */}
              <motion.div
                className="absolute top-20 right-2 sm:right-0"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="
                  flex items-start gap-3
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-lg
                  px-3 py-3
                  w-[140px]
                  shadow-lg
                ">

                  {/* 🔥 ICON */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-green-500/20">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 17l6-6 4 4 8-8"
                      />
                    </svg>
                  </div>

                  {/* 🔥 TEXT */}
                  <div>
                    <p className="text-[10px] sm:text-xs text-text-secondary">
                      Total Leads
                    </p>

                    <p className="text-sm sm:text-lg font-semibold leading-tight">
                      2,543
                    </p>

                    <p className="text-green-400 text-[10px] sm:text-xs">
                      +32%
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* FLOATING CARD 3 */}
              <motion.div
                className="absolute -bottom-4 sm:-bottom-6 left-2 sm:left-6"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="
                  flex items-center gap-2
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-lg
                  px-3 py-2
                  shadow-lg
                ">

                  {/* 🔥 ICON */}
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500/20">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  {/* 🔥 TEXT */}
                  <div className="leading-tight">
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Booking Confirmed
                    </p>
                    <p className="text-[10px] sm:text-xs text-text-secondary">
                      New Appointment
                    </p>
                  </div>

                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}