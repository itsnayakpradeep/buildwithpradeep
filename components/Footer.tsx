"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">

      <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* 🔥 BRAND */}
        <div className="space-y-4">
          <div className="opacity-80 hover:opacity-100 transition">
            <BrandLogo />
          </div>

          <p className="text-sm text-text-secondary max-w-xs leading-relaxed">
            Building premium websites that bring you clients and grow your business.
          </p>
        </div>

        {/* 🔗 QUICK LINKS */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm text-text-secondary">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#process" className="hover:text-white transition">
                Process
              </Link>
            </li>
          </ul>
        </div>

        {/* 📚 RESOURCES */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">
            Resources
          </h4>

          <ul className="space-y-3 text-sm text-text-secondary">
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* 📞 CONTACT */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">
            Let’s Connect
          </h4>

          <div className="space-y-4 text-sm text-text-secondary">

            <div className="flex items-center gap-3 hover:text-white transition">
              <Mail size={16} />
              <span>hello@buildwithpradeep.dev</span>
            </div>

            <Link href="https://www.instagram.com/buildwithpradeep.dev/" className="flex items-center gap-3 hover:text-white transition">
              <span className="text-pink-500">📸</span>
              <span>@buildwithpradeep.dev</span>
            </Link>

            <div className="flex items-center gap-3 hover:text-white transition">
              <Phone size={16} />
              <span>+91 9178975741</span>
            </div>

          </div>
        </div>

      </div>

      {/* 🔥 BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-text-secondary">
        © {new Date().getFullYear()} Build With Pradeep. All rights reserved.
      </div>

    </footer>
  );
}