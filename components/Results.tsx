"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "120+",
    label: "Websites Delivered",
  },
  {
    value: "300%",
    label: "Avg. Increase in Leads",
  },
  {
    value: "2-3 Days",
    label: "Average Delivery",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
  },
];

export default function Results() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">

      <div className="grid md:grid-cols-[1fr_2fr] gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xs sm:max-w-sm"
        >
          <p className="text-sm text-blue-500 mb-3 uppercase tracking-wide">
            Results That Matter
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Real Results. <br /> Real Growth.
          </h2>
        </motion.div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className=" md:text-left
              md:pl-6
      md:border-l md:border-white/10
      first:md:border-none first:md:pl-0
              "
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-500">
                {item.value}
              </h3>

              <p className="text-sm text-text-secondary mt-1">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

