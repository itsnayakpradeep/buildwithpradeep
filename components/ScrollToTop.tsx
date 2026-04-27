"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / height) * 100;

      setProgress(scrolled);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <button
        onClick={scrollToTop}
        onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = `translate(0,0)`;
        }}
        className="
          relative w-14 h-14 rounded-full
          flex items-center justify-center
          bg-white/5 backdrop-blur-xl
          border border-white/10
          group overflow-hidden
        "
      >
        <svg
            className="absolute inset-0 -rotate-90 w-full h-full"
            viewBox="0 0 56 56"
            >
            {/* Background ring */}
            <circle
            cx="28"
            cy="28"
            r="26"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="3"
            fill="none"
            />

            {/* 🔥 Progress ring */}
            <circle
            cx="28"
            cy="28"
            r="26"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={163}
            strokeDashoffset={163 - (progress / 100) * 163}
            className="transition-all duration-300 drop-shadow-[0_0_6px_rgba(147,51,234,0.7)]"
            />

            <defs>
            <linearGradient id="gradient"  x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6">
                <animate attributeName="stop-color" values="#3b82f6;#9333ea;#3b82f6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
            </defs>
            </svg>

        {/* 💎 Glow */}
        <div className="
          absolute inset-0
          bg-gradient-to-r from-blue-500/20 to-purple-500/20
          blur-xl opacity-0 group-hover:opacity-100
          transition
        " />

        {/* 🚀 Icon */}
        <ArrowUp
          size={20}
          className="
            relative z-10
            text-white/80
            transition
            group-hover:-translate-y-1
            group-hover:text-white
          "
        />
      </button>
    </div>
  );
}