"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">

      {/* 🔥 GLASS BACKGROUND */}
      <div className="
        absolute inset-0 
        bg-bg/70 
        backdrop-blur-xl 
        border-b border-white/10
      " />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* LOGO */}
        <BrandLogo />

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                relative 
                hover:text-white 
                transition
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                after:bg-primaryGradient after:transition-all 
                hover:after:w-full
              "
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link
            href="contact"
            className="
              bg-primaryGradient 
              px-5 py-2.5 
              rounded-xl 
              text-sm 
              font-medium 
              text-white 
              btn-glow
            "
          >
            Let’s Build Yours →
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="
          md:hidden 
          bg-bg/95 
          backdrop-blur-xl 
          border-t border-white/10
          px-6 py-6 space-y-4
        ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-text-secondary hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="
              block text-center 
              bg-primaryGradient 
              px-5 py-3 
              rounded-xl 
              text-white 
              font-medium
              mt-4
            "
          >
            Let’s Build Yours →
          </Link>
        </div>
      )}

    </header>
  );
}