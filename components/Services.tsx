// "use client";

// import { motion } from "framer-motion";
// import { Code, BarChart, Calendar, Zap } from "lucide-react";

// const services = [
//   {
//     icon: Code,
//     color: "text-blue-500",
//     title: "Website Development",
//     desc: "Modern, fast & conversion-focused websites.",
//   },
//   {
//     icon: BarChart,
//     color: "text-green-500",
//     title: "SEO Optimization",
//     desc: "Rank higher on Google and get found by your ideal clients.",
//   },
//   {
//     icon: Calendar,
//     color: "text-purple-500",
//     title: "Booking System",
//     desc: "Get bookings on autopilot with smart integrations.",
//   },
//   {
//     icon: Zap,
//     color: "text-yellow-500",
//     title: "Speed Optimization",
//     desc: "Lightning fast websites for better rankings & user experience.",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">

//       <div className="grid md:grid-cols-2 gap-12 items-start">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="text-sm text-blue-500 mb-3 uppercase tracking-wide">
//             What We Do
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold leading-tight">
//             Everything You Need <br /> to Grow Online.
//           </h2>

//           <p className="text-text-secondary mt-4 max-w-md">
//             High-converting websites, built with strategy, design, and performance in mind.
//           </p>
//         </motion.div>

//         {/* RIGHT CARDS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {services.map((item, i) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={i}
//                 className="card"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//               >
//                 {/* ICON */}
//                 <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-4">
//                   <Icon className={`${item.color}`} />
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="font-semibold text-lg mb-2">
//                   {item.title}
//                 </h3>

//                 {/* DESC */}
//                 <p className="text-sm text-text-secondary">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { Code, BarChart, Calendar, Zap } from "lucide-react";

const services = [
   {
    icon: Code,
    iconColor: "text-blue-400",
    glow: "rgba(59,130,246,0.5)",
    gradient: "from-blue-500 to-cyan-400",
    title: "Website Development",
    desc: "Modern, fast & conversion-focused websites.",
  },
  {
    icon: BarChart,
    iconColor: "text-green-400",
    glow: "rgba(34,197,94,0.5)",
    gradient: "from-green-500 to-emerald-400",
    title: "SEO Optimization",
    desc: "Rank higher on Google and get found by your ideal clients.",
  },
  {
    icon: Calendar,
    iconColor: "text-purple-400",
    glow: "rgba(168,85,247,0.5)",
    gradient: "from-purple-500 to-pink-400",
    title: "Booking System",
    desc: "Get bookings on autopilot with smart integrations.",
  },
  {
    icon: Zap,
    iconColor: "text-yellow-400",
    glow: "rgba(250,204,21,0.5)",
    gradient: "from-yellow-400 to-orange-400",
    title: "Speed Optimization",
    desc: "Lightning fast websites for better rankings & UX.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15),transparent_40%)]" />

      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-blue-500 mb-3 uppercase tracking-wider">
            What We Do
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Everything You Need <br />
            <span className="bg-primaryGradient bg-clip-text text-transparent">
              to Grow Online.
            </span>
          </h2>

          <p className="text-text-secondary mt-5 max-w-md leading-relaxed">
            High-converting websites built with strategy, design, and performance in mind.
          </p>
        </motion.div>

        {/* RIGHT CARDS */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}