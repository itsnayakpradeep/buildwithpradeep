"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
    
     {/* 🌌 Background Glow */}
     <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
    </div>
      {/* 🔥 Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{
        width: `${progress}%`,
        transition: "width 0.1s linear",
        }}
      />

  

    <div className="max-w-6xl mx-auto grid lg:grid-cols-[220px_1fr] gap-6 lg:gap-10">

        {/* 🧭 Sidebar */}
        <aside className="hidden lg:block sticky top-32 h-fit">
            <nav className="space-y-3 text-sm">
                <Link
                    href="/privacy"
                    className={`block transition ${
                    pathname === "/privacy"
                        ? "text-white font-medium"
                        : "text-white/50 hover:text-white"
                    }`}
                >
                    Privacy
                </Link>

                <Link
                    href="/terms"
                    className={`block transition ${
                    pathname === "/terms"
                        ? "text-white font-medium"
                        : "text-white/50 hover:text-white"
                    }`}
                >
                    Terms
                </Link>
            </nav>
        </aside>

        {/* 📄 Content */}
        <div>
          <motion.h1
            initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-10"
          >
            {title}
          </motion.h1>

          <div className="
            relative
            bg-white/[0.04]
            backdrop-blur-2xl
            border border-white/10
            rounded-3xl
            p-6 sm:p-8 md:p-10
            space-y-10
            shadow-[0_10px_40px_rgba(0,0,0,0.4)]
          "> {/* ✨ Inner Glow Border */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/5" />
            {children}

          </div>
        </div>
      </div>
    </main>
  );
}