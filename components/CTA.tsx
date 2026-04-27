"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="pt-16 md:pt-20 pb-12 px-6 md:px-12 max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative overflow-hidden
          rounded-2xl
          p-6 sm:p-8 md:p-12
          flex flex-col md:flex-row
          items-center justify-between
          gap-6 md:gap-10
          text-center md:text-left
          border border-white/10
          backdrop-blur-xl
        "
      >

        {/* 🌈 Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20 blur-2xl"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* LEFT CONTENT */}
        <div className="max-w-md">

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
            Ready to Get More Clients?
          </h2>

          <p className="text-text-secondary mt-2 text-sm md:text-base">
            Let’s build a website that works for your business 24/7.
          </p>

          {/* TRUST */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 text-xs text-text-secondary">
            <span>✔ No upfront payment</span>
            <span>✔ 2–3 Days Delivery</span>
          </div>

        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

          {/* 🔥 PRIMARY CTA (DM) */}
          <motion.a
            href="https://instagram.com/buildwithpradeep.dev"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
              relative flex items-center justify-center gap-2
              w-full sm:w-auto
              px-6 py-3
              rounded-xl
              font-medium
              text-white
              bg-primaryGradient
              whitespace-nowrap
              overflow-hidden
              btn-glow
            "
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-300" />

            <Send size={18} className="relative z-10" />
            <span className="relative z-10">
              DM “WEBSITE”
            </span>
          </motion.a>

          {/* SECONDARY CTA */}
          <Link
            href="/portfolio"
            className="
              w-full sm:w-auto
              border border-white/20
              px-6 py-3
              rounded-xl
              text-sm
              hover:bg-white/5
              transition
            "
          >
            View Work
          </Link>

        </div>

      </motion.div>
    </section>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import { Send } from "lucide-react";

// export default function CTA() {
//   return (
//     <section className="pt-20 pb-12 px-6 md:px-12 max-w-7xl mx-auto">

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="
//           relative overflow-hidden
//           rounded-2xl
//           p-6 sm:p-8 md:p-12
//           flex flex-col md:flex-row
//           items-center
//           justify-between
//           gap-6 md:gap-8
//           text-center md:text-left
//           border border-white/10
//           backdrop-blur-xl
//         "
//       >

//         {/* 🌈 Animated Gradient Background */}
//         <motion.div
//           className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20 blur-2xl"
//           animate={{
//             backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           style={{
//             backgroundSize: "200% 200%",
//           }}
//         />

//         {/* LEFT */}
//         <div className="max-w-md">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
//             Ready to Get More Clients?
//           </h2>

//           <p className="text-text-secondary mt-2 text-sm md:text-base">
//             Let’s build a website that works for your business 24/7.
//           </p>
//         </div>

//         {/* BUTTON */}
//         <motion.a
//           href="https://instagram.com/yourusername"
//           target="_blank"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.96 }}
//           className="
//             relative
//             flex items-center justify-center gap-2
//             w-full sm:w-auto
//             px-6 py-3
//             rounded-xl
//             font-medium
//             text-white
//             bg-primaryGradient
//             whitespace-nowrap
//             overflow-hidden
//           "
//         >
//           {/* ✨ Glow layer */}
//           <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-300" />

//           <Send size={18} className="relative z-10" />
//           <span className="relative z-10">
//             DM “WEBSITE”
//           </span>
//         </motion.a>

//       </motion.div>
//     </section>
//   );
// }