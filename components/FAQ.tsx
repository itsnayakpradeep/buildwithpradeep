"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most projects are completed within 5–10 days depending on complexity and features.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer: "Yes, every website is fully optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "Do you provide SEO optimization?",
    answer: "Absolutely. I implement on-page SEO best practices to help you rank better.",
  },
  {
    question: "Do you offer support after delivery?",
    answer: "Yes, I provide ongoing support and maintenance if needed.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-20 border-t border-white/5">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/40 text-blue-400 text-xs sm:text-sm mb-5 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
          FAQ
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold">
          Got Questions?
          <span className="text-gradient"> I’ve Got Answers.</span>
        </h2>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = active === i;

          return (
            <div
              key={i}
              className="
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl
                overflow-hidden
                transition hover:border-primary/40
              "
            >
              {/* QUESTION */}
              <button
                onClick={() => setActive(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-white/90">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className="
                    text-xl
                    text-primary
                    font-light
                  "
                >
                  +
                </motion.span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-sm text-white/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}