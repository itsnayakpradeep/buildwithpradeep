"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const options = [
  "Landing Page",
  "Business Website",
  "E-commerce",
  "Custom Project",
];

export default function CustomSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
  const handleClick = (e: MouseEvent) => {
    if (
      ref.current &&
      e.target instanceof Node &&
      !ref.current.contains(e.target)
    ) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClick);
  return () => document.removeEventListener("mousedown", handleClick);
}, []);

  return (
    <div  ref={ref} className="relative">

      {/* SELECT BOX */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70 hover:border-blue-500/40 transition"
      >
        {selected || "Select project type"}

        <ChevronDown
          size={16}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute top-full left-0 w-full mt-2 rounded-xl bg-[#0b0f1a] border border-white/10 backdrop-blur-xl shadow-xl z-50 overflow-hidden">

          {options.map((option, i) => (
            <div
              key={i}
              onClick={() => {
                setSelected(option);
                setTimeout(() => setOpen(false), 100);
              }}
              className={`px-4 py-3 text-sm cursor-pointer transition
                ${selected === option
                    ? "bg-blue-500/20 text-white"
                    : "text-white/70 hover:bg-blue-500/10"
                }`}
            >
              {option}
            </div>
          ))}

        </div>
      )}
    </div>
  );
}