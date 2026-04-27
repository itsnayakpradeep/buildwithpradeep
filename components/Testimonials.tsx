
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "Arjun Mehta",
//     role: "Fitness Coach",
//     text: "Pradeep built a website that completely changed my business. Leads increased by 200%.",
//     img: "/avatars/1.png",
//   },
//   {
//     name: "Neha Sharma",
//     role: "Life Coach",
//     text: "Super fast delivery and amazing support. My website looks premium and converts like crazy.",
//     img: "/avatars/2.png",
//   },
//   {
//     name: "Rohit Verma",
//     role: "Business Consultant",
//     text: "Best decision I made for my business. Highly recommended for any entrepreneur.",
//     img: "/avatars/3.png",
//   },
// ];

// export default function Testimonials() {
//   const [isPaused, setIsPaused] = useState(false);
//   return (
//     <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">

//       {/* <div className="grid md:grid-cols-2 gap-12 items-start"> */}
// <div className="grid md:grid-cols-[25%_75%] gap-16 items-start">
//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="text-sm text-blue-500 mb-3 uppercase tracking-wide">
//             Client Love
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold leading-tight">
//             What My Clients <br /> Say About Me
//           </h2>
//         </motion.div>

//         {/* RIGHT CARDS */}
//         <div className="grid sm:grid-cols-2 gap-6">

//           {testimonials.map((item, i) => (
//             <motion.div
//               key={i}
//               className="card "
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//             >

//               {/* ⭐ STARS */}
//               <div className="flex gap-1 text-yellow-400 mb-3">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} size={16} fill="currentColor" />
//                 ))}
//               </div>

//               {/* TEXT */}
//               <p className="text-sm text-text-secondary leading-relaxed">
//                 “{item.text}”
//               </p>

//               {/* USER */}
//               <div className="flex items-center gap-3 mt-5">
//                 <Image
//                   src={item.img}
//                   alt={item.name}
//                   width={40}
//                   height={40}
//                   className="
//                   rounded-full object-cover
//                   transition
//                   shadow-[0_0_10px_rgba(59,130,246,0.4)]
//                   group-hover:shadow-[0_0_16px_rgba(59,130,246,0.6)]
//                 "
//                 />

//                 <div>
//                   <p className="text-sm font-medium">
//                     {item.name}
//                   </p>
//                   <p className="text-xs text-text-secondary">
//                     {item.role}
//                   </p>
//                 </div>
//               </div>

//             </motion.div>
//           ))}

//         </div>
        

//       </div>
//     </section>
//   );
// }



"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

const testimonials = [
    {
    name: "Jason Miller",
    role: "Marketing Consultant",
    text: "Working with Pradeep was seamless. The site looks incredible and our lead quality has improved significantly.",
    img: "/avatars/7.png",
     rating: 5,
  },
  {
    name: "Emily Carter",
    role: "Business Coach",
    text: "I’ve hired developers before, but this was on another level. Fast, clean, and exactly what I needed.",
    img: "/avatars/8.png",
     rating: 4,
  },
  {
    name: "Arjun Mehta",
    role: "Fitness Coach",
    text: "Pradeep built a website that completely changed my business. Leads increased by 200%.",
    img: "/avatars/1.png",
     rating: 5,
  },
  {
    name: "Neha Sharma",
    role: "Life Coach",
    text: "Super fast delivery and amazing support. My website looks premium and converts like crazy.",
    img: "/avatars/2.png",
     rating: 5,
  },
  {
    name: "Rohit Verma",
    role: "Business Consultant",
    text: "Best decision I made for my business. Highly recommended for any entrepreneur.",
    img: "/avatars/3.png",
     rating: 5,
  },
  {
  name: "Oliver Bennett",
  role: "Startup Founder",
  text: "The website gave our brand a much more professional presence. We've seen a noticeable increase in enquiries.",
  img: "/avatars/9.png",
   rating: 5,
},
{
  name: "Sophia Williams",
  role: "Creative Director",
  text: "Absolutely brilliant work. The attention to detail and smooth communication made the whole process effortless.",
  img: "/avatars/10.png",
   rating: 5,
}
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  const duplicated = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">

  <div className="grid md:grid-cols-[25%_75%] gap-16 items-start">

    {/* LEFT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-sm"
    >
      <p className="text-sm text-blue-500 mb-3 uppercase tracking-wide">
        Client Love
      </p>

      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        What My Clients <br /> Say About Me
      </h2>
    </motion.div>

    {/* RIGHT */}
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Fade edges (optional but premium) */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: isPaused ? 0 : ["0%", "-50%"], // RIGHT → LEFT
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >

        {duplicated.map((item, i) => (
          <div
            key={i}
            className="card group relative min-w-[280px] max-w-[280px] hover:-translate-y-0 transition duration-300"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition" />

            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 mb-3">
              {Array.from({ length: 5 }).map((_, index) => {
                if (index + 1 <= item.rating) {
                  return <Star key={index} size={16} className="text-yellow-400 fill-yellow-400" />;
                } else if (index < item.rating) {
                  return <StarHalf key={index} size={16} className="text-yellow-400 fill-yellow-400" />;
                } else {
                  return <Star key={index} size={16} className="text-white/20" />;
                }
              })}
            </div>

            {/* Text */}
            <p className="text-sm text-text-secondary leading-relaxed">
              “{item.text}”
            </p>

            {/* User */}
            <div className="flex items-center gap-3 mt-5">
              <Image
                src={item.img}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />

              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-text-secondary">{item.role}</p>
              </div>
            </div>
          </div>
        ))}

      </motion.div>
    </div>

  </div>
</section>
  );
}