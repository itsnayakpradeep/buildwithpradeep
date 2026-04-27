"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FloatingBackButton() {
  return (
    <Link
      href="/"
      className="
        fixed bottom-6 left-6 z-50
        flex items-center gap-2
        px-4 py-2 rounded-full
        bg-white/5 backdrop-blur-xl
        border border-white/10
        text-sm text-white/70
        shadow-lg
        hover:text-white hover:border-blue-500/40
        transition duration-300
        group
      "
    >
      <ArrowLeft
        size={16}
        className="group-hover:-translate-x-1 transition"
      />
      Back to Home
    </Link>
  );
}